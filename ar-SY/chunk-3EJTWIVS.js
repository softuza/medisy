import{a as J,b as K,c as n,f as W,g as Z}from"./chunk-YUC45UAG.js";import"./chunk-GPAES7OP.js";import"./chunk-DSJR6L5G.js";import"./chunk-XDEHVO3T.js";import{b as k,f as w,g as j,h as q,j as H,k as Q}from"./chunk-LUZYQH3A.js";import{a as m}from"./chunk-AOV25AXW.js";import"./chunk-ODYGSBAJ.js";import{a as D,b as L,d as V,e as z,g as F}from"./chunk-MHLQ5ASK.js";import{q as P,r as U,s as $,u as G}from"./chunk-EMVR6TPU.js";import"./chunk-ZDS23LK5.js";import"./chunk-WX4XW32G.js";import{i as I}from"./chunk-Q4QLTUTU.js";import{d as C,f as T,g as b,l as y,n as A,q as O,r as R,t as N}from"./chunk-R425IBES.js";import{a as Y}from"./chunk-DDV3ZTDK.js";import{b as d,c as X}from"./chunk-MFJGOIE4.js";import"./chunk-KPHZXQ4R.js";import"./chunk-53QS6UIR.js";import"./chunk-TM26YT7E.js";import{a as B}from"./chunk-XYHX3JVK.js";import"./chunk-FZND2MZR.js";import{r as v}from"./chunk-CVZW7JYW.js";import"./chunk-GBJNACNX.js";import"./chunk-IJWI4VMJ.js";import"./chunk-OKKKBEFN.js";import{Jb as p,Kb as c,Lb as f,Wb as g,bb as l,ja as r,mb as M,mc as _,na as S,nc as E,yb as a}from"./chunk-K7VHIDZW.js";import"./chunk-VARUJZUG.js";var x=(()=>{let i=class i extends w{constructor(){let t=r(D);super(t),this.mlabService=r(m),this.fb=r(R),this.data=r(L),this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.unitSelectConfig={emptyOption:!0},this.testTypeSelectConfig={optionSelectedFn:(u,h)=>{h&&this.form.patchValue({unitId:h?.preferedUnitId});}};let o=this.fb;this.dialog=t;let e=this.data;this.form=o.group({description:[e?.description,[C.maxLength(4096)]],testTypeId:[e?.testTypeId,[C.required]],unitId:[e?.unitId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[_([m]),M,E],decls:7,vars:9,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0648\u0627\u062D\u062F\u0629";let e;return e="\u0627\u0644\u0648\u0635\u0641",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source","config"],["formControlName","unitId","label",o,3,"source","config"],["formControlName","description","label",e],[3,"actions"]];},template:function(o,e){o&1&&(f(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),c()(),f(6,"sz-ui-dialog-actions",5)),o&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),l(2),a("formGroup",e.form),l(),a("source",e.testTypes)("config",e.testTypeSelectConfig),l(),a("source",e.units)("config",e.unitSelectConfig),l(2),a("actions",e.actions));},dependencies:[N,y,T,b,A,O,F,z,I,P,Q,j,q,G,$,U],encapsulation:2});let s=i;return s;})();var ee=(()=>{let i=class i{constructor(){this.dialog=r(V),this.mlabService=r(m),this.router=r(v),this.dataSource=new W(),this.appBarConfig={title:B.reference_values,menu:X.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.hyperlink("testType.nameEn").setClickFn(t=>this.router.navigate([Y.ReferenceValues,t.id,"rules"])).setStacked(n.string("description").setValueClassFontSmall()),n.string("unit").setValueGetter(t=>t.unit?.symbol),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReferenceValueDeleteComponent.bind(this))])),this.get();}openSaveComponent(t){this.dialog.open(x,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReferenceValueDeleteComponent(t){this.dialog.open(H,{data:k.delete(this.mlabService.referenceValues.delete(t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-reference-values"]],standalone:!0,features:[_([m]),E],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(p(0,"sz-ui-table-bar",0),g("changed",function(){return e.get();}),c(),p(1,"sz-ui-table",1),g("update",function(){return e.get();}),c()),o&2&&(a("config",e.appBarConfig)("dataSource",e.dataSource),l(),a("dataSource",e.dataSource));},dependencies:[J,K],encapsulation:2});let s=i;return s;})();var Ve=[{path:"",component:ee}];export{Ve as default};/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/