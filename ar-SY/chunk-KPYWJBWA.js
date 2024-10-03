import{a as q,b as H,c as a,f as Q,g as k}from"./chunk-QTL2VK7Y.js";import"./chunk-A4CG2NMU.js";import"./chunk-VTSPPHDN.js";import"./chunk-M7UZMDJ3.js";import{b as F,f as G,g as U,h as X,j as w,k as j}from"./chunk-MBGPVYCR.js";import{a as l}from"./chunk-L3WDPQP7.js";import"./chunk-B5ANHG6X.js";import{a as D,b as R,d as v,e as y,g as z}from"./chunk-3RAF2YCP.js";import{c as Y,s as $,u as B}from"./chunk-BD7VQR7P.js";import"./chunk-HLSHTPUZ.js";import"./chunk-XGXTHGMT.js";import"./chunk-JE5WUYND.js";import{d as p,f as O,g as A,l as b,o as h,r as I,s as L,u as P}from"./chunk-WM2WRHBE.js";import{b as C}from"./chunk-WED5ZXP7.js";import"./chunk-TR7ZWGFY.js";import"./chunk-LU5YIJRC.js";import"./chunk-CTOSHI2B.js";import{a as V}from"./chunk-OCSDC33N.js";import"./chunk-MP6YRTZR.js";import"./chunk-BN5OIF3Q.js";import"./chunk-AIVPDPHA.js";import"./chunk-W6JJS6CU.js";import"./chunk-OMSMEPHM.js";import{Jb as _,Kb as m,Lb as c,Wb as T,bb as S,ja as n,mb as N,mc as f,na as u,nc as M,yb as s}from"./chunk-O34SSFLY.js";import"./chunk-QEH2RDWU.js";var J=(()=>{let i=class i extends G{constructor(){let o=n(D);super(o),this.mlabService=n(l),this.fb=n(L),this.data=n(R);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({nameEn:[e?.nameEn,[p.required,p.minLength(1)]],nameAr:[e?.nameAr,[p.required,p.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[f([l]),N,M],decls:9,vars:5,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let e;e="\u0623\u062E\u062A\u0635\u0627\u0631";let d;d="\u0627\u0644\u0648\u0635\u0641";let g;return g="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",o],["formControlName","nameAr","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",d],["formControlName","purpose","label",g],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),m()(),c(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),S(2),s("formGroup",e.form),S(6),s("actions",e.actions));},dependencies:[P,b,O,A,h,I,z,y,j,U,X,B,Y,$],encapsulation:2});let r=i;return r;})();var K=(()=>{let i=class i{constructor(){this.dialog=n(v),this.mlabService=n(l),this.dataSource=new Q(),this.appBarConfig={title:V.specimen_types},this.dataSource.columnDefs.push(a.uuid("id"),a.string("nameEn"),a.string("nameAr"),a.string("abbreviation"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([C.edit(this.openSaveComponent.bind(this)),C.divider(),C.delete(this.openSpecimenTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(J,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openSpecimenTypeDeleteComponent(o){this.dialog.open(w,{data:F.delete(this.mlabService.specimenTypes.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-specimen-types"]],standalone:!0,features:[f([l]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(_(0,"sz-ui-table-bar",0),T("changed",function(){return e.get();}),m(),_(1,"sz-ui-table",1),T("update",function(){return e.get();}),m()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),S(),s("dataSource",e.dataSource));},dependencies:[q,H],encapsulation:2});let r=i;return r;})();var Ae=[{path:"",component:K}];export{Ae as default};/**i18n:08dc477745c643d8c857c9e8e740bb8fd5d4d2f068a9032e0d444ef2bfb6a6f8*/