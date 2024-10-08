import{a as C}from"./chunk-5XHGVF2U.js";import{a as te,b as ie,c as r,f as oe,g as ne}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as J,f as K,g as W,h as Z,j as x,k as ee}from"./chunk-INGRYE55.js";import{a as p}from"./chunk-7QN2GZH5.js";import"./chunk-4Y3DXTZY.js";import{a as B,b as V,d as G,e as F,g as U}from"./chunk-HESHWLJQ.js";import{c as X,p as k,q as H,r as j,s as q,u as w}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d as m,f as y,g as I,l as D,o as P,r as v,s as Y,u as z}from"./chunk-UR5GDBT7.js";import{a as Q}from"./chunk-WWZ2VM4W.js";import{b as S,c as N}from"./chunk-JVOCSYLO.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as O}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{r as $}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as u,Kb as E,Lb as c,Wb as g,bb as a,ja as s,mb as h,mc as f,na as T,nc as M,yb as n}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var re=(()=>{let o=class o extends K{constructor(){let t=s(B);super(t),this.mlabService=s(p),this.fb=s(Y),this.data=s(V),this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testResultTypes=Object.keys(C).map(d=>C[d]),this.defaultUnitSelectConfig={emptyOption:!0};let i=this.fb;this.dialog=t;let e=this.data;this.form=i.group({nameEn:[e?.nameEn,[m.required,m.minLength(1)]],nameAr:[e?.nameAr,[m.required,m.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]],disciplineId:[e?.disciplineId,[]],unitId:[e?.unitId,[]],isGroup:[e?.isGroup??!1,[]],testResultType:[e?.testResultType??C.Quantitative,[m.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[f([p]),h,M],decls:13,vars:9,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let i;i="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let e;e="\u0623\u062E\u062A\u0635\u0627\u0631";let d;d="\u0627\u0644\u0648\u0635\u0641";let A;A="\u0627\u0644\u063A\u0627\u064A\u0629";let R;R="\u0641\u0626\u0629";let L;L="\u0648\u0627\u062D\u062F\u0629";let b;return b="\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",i],["formControlName","abbreviation","label",e],["formControlName","description","label",d],["formControlName","purpose","label",A],["formControlName","disciplineId","label",R,3,"source"],["formControlName","unitId","label",L,3,"source","config"],["formControlName","testResultType","label","Result Type",3,"source"],["formControlName","isGroup","label",b],[3,"actions"]];},template:function(i,e){i&1&&(c(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-select",8)(10,"sz-ui-form-field-select",9)(11,"mat-checkbox",10),E()(),c(12,"sz-ui-dialog-actions",11)),i&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),a(2),n("formGroup",e.form),a(6),n("source",e.disciplines),a(),n("source",e.units)("config",e.defaultUnitSelectConfig),a(),n("source",e.testResultTypes),a(2),n("actions",e.actions));},dependencies:[z,D,y,I,P,v,U,F,H,k,ee,W,Z,w,X,q,j],encapsulation:2});let _=o;return _;})();var se=(()=>{let o=class o{constructor(){this.dialog=s(G),this.mlabService=s(p),this.router=s($),this.dataSource=new oe("nameEn"),this.appBarConfig={title:O.test_types,menu:N.default([S.add(this.openSaveComponent.bind(this)),S.menu([S.search()])])},this.dataSource.columnDefs.push(r.uuid("id"),r.hyperlink("nameEn").setClickFn(t=>this.router.navigate([Q.TestTypes,t.id])).setHeaderSortable(!0),r.string("code").setStyleSmall().setResponsive(!0),r.string("discipline.nameEn").setHeaderName(O.discipline).setResponsive(!0),r.string("unit.name").setHeaderName(O.unit).setResponsive(!0),r.string("abbreviation").setStyleSmall().setResponsive(!0),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),r.menu(N.more([S.edit(this.openSaveComponent.bind(this)),S.divider(),S.delete(this.openTestTypeDeleteComponent.bind(this))]))),this.get();}openSaveComponent(t){this.dialog.open(re,{data:t}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openTestTypeDeleteComponent(t){this.dialog.open(x,{data:J.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.testTypes.get(this.dataSource.getQuery()).pipe(ne(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-types"]],standalone:!0,features:[f([p]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,e){i&1&&(u(0,"sz-ui-table-bar",0),g("changed",function(){return e.get();}),E(),u(1,"sz-ui-table",1),g("update",function(){return e.get();}),E()),i&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),a(),n("dataSource",e.dataSource));},dependencies:[te,ie],encapsulation:2});let _=o;return _;})();var Fe=[{path:"",component:se}];export{Fe as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/