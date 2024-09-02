import{c as oe}from"./chunk-5OX6AIYI.js";import"./chunk-442WSZVH.js";import{a as K}from"./chunk-HAD2RXAL.js";import{b as Z,c as S,e as x,g as ee,h as te}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as Y,f as P,g as B,h as L,j as $,k as V}from"./chunk-ZUXIOQ5W.js";import{a as d}from"./chunk-IVJ2NFMZ.js";import"./chunk-BJI27WIG.js";import{a as O,b as D,d as z,e as N,g as A}from"./chunk-XPOR4ANW.js";import{q as F,r as R}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import"./chunk-OLKWA3AP.js";import{d as y,f as g,g as C,l as _,n as M,q as b,r as v,t as G}from"./chunk-H2FFMEH6.js";import{b as m,c as J}from"./chunk-QW5IGDYW.js";import{a as W}from"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as Q}from"./chunk-TCPYXQGZ.js";import{p as I,r as q,s as X,v as k,x as E}from"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import{La as H}from"./chunk-OIZYHDJE.js";import{Ia as U,Jb as u,Kb as c,Lb as p,Wb as j,bb as n,ja as r,mb as h,mc as T,na as l,nc as f,yb as a}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var ie=(()=>{let o=class o extends P{constructor(){let e=r(O);super(e),this.mlabService=r(d),this.fb=r(v),this.data=r(D),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:E.create().notAny("testGroups.testGroupId",this.data).filters()}),this.testTypeSelectConfig={multiple:!0};let t=this.fb;this.dialog=e,this.form=t.group({testTypeIds:[null,[y.required]]});}submit(){this.IsValid()&&this.save(this.mlabService.testGroups.testTypes.batchCreate(this.data,this.form.value.testTypeIds.map(e=>({testTypeId:e}))));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-import"]],standalone:!0,features:[T([d]),h,f],decls:5,vars:7,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),c()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),a("formGroup",i.form),n(),a("source",i.testTypes)("config",i.testTypeSelectConfig),n(),a("actions",i.actions));},dependencies:[G,_,g,C,M,b,A,N,F,V,B,L,R],encapsulation:2});let s=o;return s;})();var re=(()=>{let o=class o extends P{constructor(){let e=r(O);super(e),this.mlabService=r(d),this.fb=r(v),this.data=r(D),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:k.Or,filters:E.create().equalIf("id",this.data.testGroupTestType?.testTypeId).notAny("testGroups.testGroupId",this.data.testGroupId).filters()});let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({testTypeId:[i.testGroupTestType?.testTypeId,[y.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[T([d]),h,f],decls:5,vars:6,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),c()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),a("formGroup",i.form),n(),a("source",i.testTypes),n(),a("actions",i.actions));},dependencies:[G,_,g,C,M,b,A,N,F,V,B,L,R],encapsulation:2});let s=o;return s;})();var se=(()=>{let o=class o{constructor(){this.dialog=r(z),this.mlabService=r(d),this.route=r(I),this.dataSource=new x(),this.testGroupId=U.required(),this.card={header:{title:Q.test_types},menu:J.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.import(this.openImportComponent.bind(this)),m.divider(),m.clear(this.openTestGroupTestTypesClearComponent.bind(this))])])},this.dataSource.columnDefs.push(S.uuid("id"),S.string("testType.nameEn"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),S.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openTestGroupTestTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openImportComponent(){this.dialog.open(ie,{data:this.testGroupId()}).afterClosed().subscribe(e=>{this.dataSource.add(e);});}openSaveComponent(e){this.dialog.open(re,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestGroupTestTypeDeleteComponent(e){this.dialog.open($,{data:Y.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}openTestGroupTestTypesClearComponent(){this.dialog.open($,{data:Y.delete(this.mlabService.testGroups.testTypes.batchDelete(this.testGroupId(),this.dataSource.getData().map(e=>e.id)))}).afterClosed().subscribe(e=>{e&&this.dataSource.clear();});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[f],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),j("update",function(){return i.get();}),c()()),t&2&&(a("card",i.card),n(),a("dataSource",i.dataSource));},dependencies:[X,H,te,Z,K],encapsulation:2});let s=o;return s;})();var ae=(()=>{let o=class o{constructor(){this.dialog=r(z),this.mlabService=r(d),this.route=r(I),this.router=r(q),this.testGroup=this.route.snapshot.data.testGroup,this.tiles=[],this.appBarConfig={title:this.testGroup.name,subtitle:this.testGroup.description,backEnabled:!0};}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[T([]),f],decls:3,vars:2,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",0),u(1,"div",1),p(2,"sz-medisy-laboratory-test-group-test-types",2),c()),t&2&&(a("config",i.appBarConfig),n(2),a("testGroupId",i.testGroup.id));},dependencies:[oe,W,se],encapsulation:2});let s=o;return s;})();var dt=[{path:"",component:ae},{path:"specimen-types",loadComponent:()=>import("./chunk-7QIGFKKF.js").then(s=>s.TestGroupSpecimenTypesComponent)}];export{dt as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/