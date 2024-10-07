import{a as H,b as Q,c as a,f as k,g as J}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as G,f as U,g as X,h as w,j,k as q}from"./chunk-INGRYE55.js";import{a as l}from"./chunk-XQ6KMBLS.js";import"./chunk-4Y3DXTZY.js";import{a as D,b as R,d as y,e as v,g as z}from"./chunk-HESHWLJQ.js";import{c as Y,s as $,u as B}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d as p,f as O,g as A,l as b,o as h,r as I,s as L,u as P}from"./chunk-UR5GDBT7.js";import{b as C,c as F}from"./chunk-CRJIWNDX.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as V}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as _,Kb as m,Lb as c,Wb as T,bb as S,ja as n,mb as N,mc as f,na as u,nc as M,yb as s}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var K=(()=>{let i=class i extends U{constructor(){let o=n(D);super(o),this.mlabService=n(l),this.fb=n(L),this.data=n(R);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({nameEn:[e?.nameEn,[p.required,p.minLength(1)]],nameAr:[e?.nameAr,[p.required,p.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[f([l]),N,M],decls:9,vars:5,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let e;e="\u0623\u062E\u062A\u0635\u0627\u0631";let d;d="\u0627\u0644\u0648\u0635\u0641";let g;return g="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",o],["formControlName","nameAr","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",d],["formControlName","purpose","label",g],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),m()(),c(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),S(2),s("formGroup",e.form),S(6),s("actions",e.actions));},dependencies:[P,b,O,A,h,I,z,v,q,X,w,B,Y,$],encapsulation:2});let r=i;return r;})();var W=(()=>{let i=class i{constructor(){this.dialog=n(y),this.mlabService=n(l),this.dataSource=new k(),this.appBarConfig={title:V.specimen_types},this.dataSource.columnDefs.push(a.uuid("id"),a.string("nameEn"),a.string("nameAr"),a.string("abbreviation"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(F.more([C.edit(this.openSaveComponent.bind(this)),C.divider(),C.delete(this.openSpecimenTypeDeleteComponent.bind(this))]))),this.get();}openSaveComponent(o){this.dialog.open(K,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openSpecimenTypeDeleteComponent(o){this.dialog.open(j,{data:G.delete(this.mlabService.specimenTypes.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-specimen-types"]],standalone:!0,features:[f([l]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(_(0,"sz-ui-table-bar",0),T("changed",function(){return e.get();}),m(),_(1,"sz-ui-table",1),T("update",function(){return e.get();}),m()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),S(),s("dataSource",e.dataSource));},dependencies:[H,Q],encapsulation:2});let r=i;return r;})();var be=[{path:"",component:W}];export{be as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/