import{a as q,b as H,c as a,f as Q,g as k}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as F,f as G,g as U,h as X,j as w,k as j}from"./chunk-ZUXIOQ5W.js";import{a as l}from"./chunk-IVJ2NFMZ.js";import"./chunk-BJI27WIG.js";import{a as D,b as R,d as v,e as y,g as z}from"./chunk-XPOR4ANW.js";import{c as B,s as V,t as $}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import"./chunk-OLKWA3AP.js";import{d as p,f as O,g as A,l as b,n as h,q as I,r as L,t as P}from"./chunk-H2FFMEH6.js";import{b as C}from"./chunk-QW5IGDYW.js";import"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as Y}from"./chunk-TCPYXQGZ.js";import"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import"./chunk-OIZYHDJE.js";import{Jb as _,Kb as m,Lb as c,Wb as T,bb as S,ja as n,mb as N,mc as f,na as u,nc as M,yb as s}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var J=(()=>{let o=class o extends G{constructor(){let i=n(D);super(i),this.mlabService=n(l),this.fb=n(L),this.data=n(R);let t=this.fb;this.dialog=i;let e=this.data;this.form=t.group({nameEn:[e?.nameEn,[p.required,p.minLength(1)]],nameAr:[e?.nameAr,[p.required,p.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[f([l]),N,M],decls:9,vars:5,consts:()=>{let i;i="English Name";let t;t="Arabic Name";let e;e="Abbreviation";let d;d="Description";let g;return g="Purpose",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",i],["formControlName","nameAr","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",d],["formControlName","purpose","label",g],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),m()(),c(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),S(2),s("formGroup",e.form),S(6),s("actions",e.actions));},dependencies:[P,b,O,A,h,I,z,y,j,U,X,$,B,V],encapsulation:2});let r=o;return r;})();var K=(()=>{let o=class o{constructor(){this.dialog=n(v),this.mlabService=n(l),this.dataSource=new Q(),this.appBarConfig={title:Y.specimen_types},this.dataSource.columnDefs.push(a.uuid("id"),a.string("nameEn"),a.string("nameAr"),a.string("abbreviation"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([C.edit(this.openSaveComponent.bind(this)),C.divider(),C.delete(this.openSpecimenTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(J,{data:i}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openSpecimenTypeDeleteComponent(i){this.dialog.open(w,{data:F.delete(this.mlabService.specimenTypes.delete(i.id),i)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-specimen-types"]],standalone:!0,features:[f([l]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(_(0,"sz-ui-table-bar",0),T("changed",function(){return e.get();}),m(),_(1,"sz-ui-table",1),T("update",function(){return e.get();}),m()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),S(),s("dataSource",e.dataSource));},dependencies:[q,H],encapsulation:2});let r=o;return r;})();var Ae=[{path:"",component:K}];export{Ae as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/