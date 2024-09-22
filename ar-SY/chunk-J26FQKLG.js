import{a as q,b as H,c as a,f as Q,g as k}from"./chunk-IGSRBC3T.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{b as F,f as G,g as U,h as X,j as w,k as j}from"./chunk-YKMXQFDH.js";import{a as l}from"./chunk-NEE4IFRD.js";import"./chunk-WUVRWIHU.js";import{a as D,b as R,d as v,e as y,g as z}from"./chunk-HQFAQEC3.js";import{c as Y,s as $,u as B}from"./chunk-IITPHOLL.js";import"./chunk-JPBZ5DSJ.js";import"./chunk-G7AMUACM.js";import"./chunk-N4OOJIAX.js";import{d as p,f as O,g as A,l as b,n as h,q as I,r as L,t as P}from"./chunk-GLZMJYJP.js";import{b as C}from"./chunk-QOXR5OPH.js";import"./chunk-NC2TMKBF.js";import"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as V}from"./chunk-GM2OQK6E.js";import"./chunk-K5FLVMR2.js";import"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import"./chunk-UEBH5A2M.js";import{Jb as _,Kb as m,Lb as c,Wb as T,bb as S,ja as n,mb as N,mc as f,na as u,nc as M,yb as s}from"./chunk-6J2YPVJB.js";import"./chunk-TH7MQ6T4.js";var J=(()=>{let i=class i extends G{constructor(){let o=n(D);super(o),this.mlabService=n(l),this.fb=n(L),this.data=n(R);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({nameEn:[e?.nameEn,[p.required,p.minLength(1)]],nameAr:[e?.nameAr,[p.required,p.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[f([l]),N,M],decls:9,vars:5,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let e;e="\u0623\u062E\u062A\u0635\u0627\u0631";let d;d="\u0627\u0644\u0648\u0635\u0641";let g;return g="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",o],["formControlName","nameAr","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",d],["formControlName","purpose","label",g],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),m()(),c(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),S(2),s("formGroup",e.form),S(6),s("actions",e.actions));},dependencies:[P,b,O,A,h,I,z,y,j,U,X,B,Y,$],encapsulation:2});let r=i;return r;})();var K=(()=>{let i=class i{constructor(){this.dialog=n(v),this.mlabService=n(l),this.dataSource=new Q(),this.appBarConfig={title:V.specimen_types},this.dataSource.columnDefs.push(a.uuid("id"),a.string("nameEn"),a.string("nameAr"),a.string("abbreviation"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([C.edit(this.openSaveComponent.bind(this)),C.divider(),C.delete(this.openSpecimenTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(J,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openSpecimenTypeDeleteComponent(o){this.dialog.open(w,{data:F.delete(this.mlabService.specimenTypes.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-specimen-types"]],standalone:!0,features:[f([l]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(_(0,"sz-ui-table-bar",0),T("changed",function(){return e.get();}),m(),_(1,"sz-ui-table",1),T("update",function(){return e.get();}),m()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),S(),s("dataSource",e.dataSource));},dependencies:[q,H],encapsulation:2});let r=i;return r;})();var Ae=[{path:"",component:K}];export{Ae as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/