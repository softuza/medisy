import"./chunk-3ZJNDXFA.js";import{c as pe}from"./chunk-MHNFS63P.js";import{a as Y}from"./chunk-RO2GEY6U.js";import{a as M,b as ie,d as re,e as se,j as ae,k as ne}from"./chunk-UFZOVEXN.js";import"./chunk-KG52U4YG.js";import"./chunk-BVIAW6LA.js";import"./chunk-QHHLUO4M.js";import{a as m}from"./chunk-UYGPYJU5.js";import"./chunk-WB6GSLJI.js";import{e as w,f as $,g as U,i as te,j as y,k as oe}from"./chunk-ATQTF7V2.js";import{a as V}from"./chunk-XTD4P5RM.js";import{h as g,j as ee}from"./chunk-SE7A63UJ.js";import{a as A,b as R,d as F,e as P,g as T}from"./chunk-KXHITGXF.js";import{t as B,u as j}from"./chunk-OTWXCUGL.js";import"./chunk-NUTQJXHI.js";import"./chunk-BVTPLI23.js";import{c as x}from"./chunk-MJ3OXUGM.js";import"./chunk-EFKI6RZJ.js";import{d as v,f as _,g as b,l as I,n as E,q as D,r as G,u as z}from"./chunk-4JGOPH4G.js";import{t as W}from"./chunk-UFIT6BFN.js";import{a as O,c as K,e as N}from"./chunk-MRA43Y7M.js";import"./chunk-47AE3CN4.js";import{ia as Z,la as L}from"./chunk-6PMHIRG3.js";import"./chunk-73YOCJBM.js";import{Fa as Q,Jb as u,Kb as c,Lb as p,Wb as J,bb as n,cb as a,ea as q,ja as h,na as l,nc as S,oa as H,oc as f,qb as C,zb as s}from"./chunk-S5HBEIU3.js";import"./chunk-K67PUIM2.js";var le=(()=>{let o=class o extends w{constructor(e,t,i,d){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=d,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:W.create().notAny("testGroups.testGroupId",this.data).filters()}),this.testTypeSelectConfig={multiple:!0},this.form=t.group({testTypeIds:[null,[v.required]]});}submit(){this.IsValid()&&this.save(this.mlabService.testGroups.testTypes.batchCreate(this.data,this.form.value.testTypeIds.map(e=>({testTypeId:e}))));}};o.ɵfac=function(t){return new(t||o)(a(m),a(G),a(A),a(R));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-import"]],standalone:!0,features:[S([]),C,f],decls:5,vars:7,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),c()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),s("formGroup",i.form),n(),s("source",i.testTypes)("config",i.testTypeSelectConfig),n(),s("actions",i.actions));},dependencies:[z,I,_,b,E,D,T,P,B,y,$,U,j],encapsulation:2});let r=o;return r;})();var ue=(()=>{let o=class o extends w{constructor(e,t,i,d){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=d,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({testTypeId:[d.testGroupTestType?.testTypeId,[v.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(m),a(G),a(A),a(R));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[S([]),C,f],decls:5,vars:6,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),c()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),s("formGroup",i.form),n(),s("source",i.testTypes),n(),s("actions",i.actions));},dependencies:[z,I,_,b,E,D,T,P,B,y,$,U,j],encapsulation:2});let r=o;return r;})();var ce=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new re(),this.testGroupId=Q.required(),this.card={title:x.test_types,menu:ee.more([g.add(()=>this.openSaveComponent()),g.import(()=>this.openImportComponent())])},this.dataSource.columnDefs.push(M.uuid("id"),M.string("testType.nameEn"),M.date("createdAt").setVisible(!1),M.date("updatedAt").setVisible(!1),ie.menu([g.edit(d=>this.openSaveComponent(d)),g.delete(d=>this.openTestTypeSpecimenTypeDeleteComponent(d))]));}ngOnInit(){this.get();}openImportComponent(){this.dialog.open(le,{data:this.testGroupId()}).afterClosed().subscribe(e=>{this.dataSource.add(e);});}openSaveComponent(e){this.dialog.open(ue,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(te,{data:oe.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(se(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(F),a(m),a(O));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[f],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),J("update",function(){return i.get();}),c()()),t&2&&(s("card",i.card),n(),s("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[N,L,ne,ae,Y],encapsulation:2});let r=o;return r;})();var k=(()=>{let o=class o{constructor(){this.dialog=h(F),this.mlabService=h(m),this.route=h(O),this.router=h(K),this.testGroup=this.route.snapshot.data.testGroup,this.tiles=[],this.appBarConfig={title:this.testGroup.name,subtitle:this.testGroup.description,backEnabled:!0};}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[S([]),f],decls:3,vars:2,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",0),u(1,"div",1),p(2,"sz-medisy-laboratory-test-group-test-types",2),c()),t&2&&(s("config",i.appBarConfig),n(2),s("testGroupId",i.testGroup.id));},dependencies:[pe,V,ce],encapsulation:2});let r=o;return r;})();var fe=[{path:"",component:k},{path:"specimen-types",loadComponent:()=>import("./chunk-WAWLPUI2.js").then(r=>r.TestGroupSpecimenTypesComponent)}];var zt=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=H({type:o}),o.ɵinj=q({providers:[m],imports:[N.forChild(fe),T,Z,L,V,y,Y,k]});let r=o;return r;})();export{zt as TestGroupModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/