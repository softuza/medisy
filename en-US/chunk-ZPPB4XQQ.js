import{a,b as x,d as ee,f as te,g as oe,h as b,k as ie,l as re}from"./chunk-ITIEW4R3.js";import"./chunk-VSVSVBNB.js";import"./chunk-RMIHOFED.js";import{a as N}from"./chunk-UJRSINNB.js";import{e as H,f as J,g as K,i as Q,j as W,k as Z}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as q}from"./chunk-SZPDKKKX.js";import{g as A}from"./chunk-T5LWAZSF.js";import{a as U,b as X,d as k,e as w,g as j}from"./chunk-7HHYVUIJ.js";import{t as F,x as G}from"./chunk-PR23273C.js";import{Ba as y,J as B,N as Y,d as C,f as g,g as P,k as I,m as h,p as R,q as v,t as D,ya as V}from"./chunk-MNBERY7T.js";import"./chunk-4PXWNT7N.js";import{Ea as z,Ga as $}from"./chunk-6NFGCLSN.js";import{Fb as _,Gb as T,Hb as m,M as E,Rb as c,Tb as O,gb as S,hb as n,kc as f,oa as M,ob as L,vb as s}from"./chunk-6OQDJKEQ.js";var ae=(()=>{let r=class r extends H{constructor(e,o,i,t){super(i),this.mlabService=e,this.fb=o,this.dialog=i,this.data=t,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["latinName"]}),this.form=o.group({enabled:[t.laboratoryTestType?.enabled??!0,[C.required]],retailPrice:[t.laboratoryTestType?.retailPrice??0,[]],costPrice:[t.laboratoryTestType?.costPrice??0,[]],forwardPrice:[t.laboratoryTestType?.forwardPrice??0,[]],isFavorite:[t.laboratoryTestType?.isFavorite??!1,[C.required]],testTypeId:[t.laboratoryTestType?.testTypeId,[C.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(o){return new(o||r)(n(N),n(v),n(U),n(X));},r.ɵcmp=M({type:r,selectors:[["sz-medisy-mlab-laboratory-test-types-save"]],standalone:!0,features:[L,f],decls:12,vars:4,consts:()=>{let e;e="Test Type";let o;o="Retail Price";let i;i="Cost Price";let t;t="Forward Price";let d;d="Favorite";let u;return u="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],["formControlName","retailPrice","label",o],["formControlName","costPrice","label",i],["formControlName","forwardPrice","label",t],["formControlName","isFavorite"],d,["formControlName","enabled"],u,[3,"actions"]];},template:function(o,i){o&1&&(m(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),_(7,"mat-checkbox",6),c(8,7),T(),_(9,"mat-checkbox",8),c(10,9),T()()(),m(11,"sz-ui-dialog-actions",10)),o&2&&(s("header",i.header),S(2),s("formGroup",i.form),S(),s("source",i.testTypes),S(8),s("actions",i.actions));},dependencies:[D,I,g,P,h,R,W,J,K,j,w,b,oe,F,G],encapsulation:2});let l=r;return l;})();var Ue=(()=>{let r=class r{constructor(e,o,i){this.dialog=e,this.mlabService=o,this.route=i,this.title=y.testTypes,this.dataSource=new ee(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(a.uuid("id"),a.uuid("laboratoryId"),a.uuid("testTypeId"),a.string("testType.name"),a.number("costPrice"),a.number("forwardPrice"),a.number("retailPrice"),a.date("createdAt",!1),a.date("updatedAt",!1),a.boolean("isFavorite",(t,d)=>{t.isFavorite=d,this.updateItem(t);}).setName(y.favorite),a.boolean("enabled",(t,d)=>{t.enabled=d,this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).pipe(E(1)).subscribe(u=>{t=u;});}),x.menu([A.edit(t=>this.openSaveComponent(t)),A.delete(t=>this.openLaboratoryTestTypeDeleteComponent(t))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().pipe(E(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(Q,{data:Z.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(E(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(V(this.dataSource.indicator)).pipe(E(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(o){return new(o||r)(n(k),n(N),n(B));},r.ɵcmp=M({type:r,selectors:[["sz-medisy-mlab-laboratory-test-types"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(m(0,"sz-ui-header-info",0),_(1,"sz-ui-table-search-filter",1),O("changed",function(){return i.get();}),_(2,"button",2),O("click",function(){return i.openSaveComponent();}),_(3,"span"),c(4,3),T()()(),_(5,"sz-ui-table",4),O("update",function(){return i.get();}),T()),o&2&&(s("title",i.title)("subtitle",i.laboratory.name),S(),s("dataSource",i.dataSource),S(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[Y,q,re,ie,te,b,$,z],encapsulation:2});let l=r;return l;})();export{Ue as LaboratoryTestTypesComponent};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/