import"./chunk-DXM66PH3.js";import{c as ne}from"./chunk-UWM24ECK.js";import{a as Y}from"./chunk-4QHPLOIE.js";import{a as h,c as ie,d as re,i as se,j as ae}from"./chunk-AUPU6QI4.js";import"./chunk-OKGOWQL5.js";import"./chunk-NEHTWZRD.js";import"./chunk-72Z2OCSQ.js";import{a as m}from"./chunk-4DEPVHVX.js";import"./chunk-7CWIHV7X.js";import{b as te,f as w,g as $,h as U,j as oe,k as y}from"./chunk-6Y6J7VB6.js";import{a as V}from"./chunk-VAHBDTYA.js";import{h as T,j as ee}from"./chunk-NR4QF72D.js";import{a as A,b as R,d as F,e as P,g as S}from"./chunk-EJOHO2EB.js";import{q as B,r as j}from"./chunk-YZKNUD65.js";import"./chunk-UFKQJOL3.js";import"./chunk-TL57E7RA.js";import"./chunk-GOMTDU6R.js";import"./chunk-HVAN3DT6.js";import"./chunk-F2RDDOGN.js";import{d as v,f as _,g as b,l as I,n as E,q as D,r as G,u as z}from"./chunk-MGV73Q32.js";import{Y as x,t as W}from"./chunk-I7PR7JM4.js";import{a as O,c as K,e as N}from"./chunk-5XANXOAJ.js";import"./chunk-N5JOJLCN.js";import{ia as Z,la as L}from"./chunk-IM7EI72R.js";import"./chunk-327W6FQA.js";import{Fa as Q,Kb as l,Lb as u,Mb as p,Xb as J,bb as n,cb as a,ea as q,ja as M,na as d,oa as H,oc as f,pc as c,qb as C,zb as s}from"./chunk-UELVXDXK.js";import"./chunk-2GMD7R3L.js";var de=(()=>{let o=class o extends w{constructor(e,t,i,g){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=g,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:W.create().notAny("testGroups.testGroupId",this.data).filters()}),this.testTypeSelectConfig={multiple:!0},this.form=t.group({testTypeIds:[null,[v.required]]});}submit(){this.IsValid()&&this.save(this.mlabService.testGroups.testTypes.batchCreate(this.data,this.form.value.testTypeIds.map(e=>({testTypeId:e}))));}};o.ɵfac=function(t){return new(t||o)(a(m),a(G),a(A),a(R));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-import"]],standalone:!0,features:[f([]),C,c],decls:5,vars:7,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),u()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),s("formGroup",i.form),n(),s("source",i.testTypes)("config",i.testTypeSelectConfig),n(),s("actions",i.actions));},dependencies:[z,I,_,b,E,D,S,P,B,y,$,U,j],encapsulation:2});let r=o;return r;})();var le=(()=>{let o=class o extends w{constructor(e,t,i,g){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=g,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({testTypeId:[g.testGroupTestType?.testTypeId,[v.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(m),a(G),a(A),a(R));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[f([]),C,c],decls:5,vars:6,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),u()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),s("formGroup",i.form),n(),s("source",i.testTypes),n(),s("actions",i.actions));},dependencies:[z,I,_,b,E,D,S,P,B,y,$,U,j],encapsulation:2});let r=o;return r;})();var ue=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new ie(),this.testGroupId=Q.required(),this.card={header:{title:x.test_types},menu:ee.more([T.add(()=>this.openSaveComponent()),T.import(()=>this.openImportComponent())])},this.dataSource.columnDefs.push(h.uuid("id"),h.string("testType.nameEn"),h.date("createdAt").setVisible(!1),h.date("updatedAt").setVisible(!1),h.menu([T.edit(this.openSaveComponent.bind(this)),T.divider(),T.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openImportComponent(){this.dialog.open(de,{data:this.testGroupId()}).afterClosed().subscribe(e=>{this.dataSource.add(e);});}openSaveComponent(e){this.dialog.open(le,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(oe,{data:te.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(F),a(m),a(O));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[c],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),J("update",function(){return i.get();}),u()()),t&2&&(s("card",i.card),n(),s("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[N,L,ae,se,Y],encapsulation:2});let r=o;return r;})();var k=(()=>{let o=class o{constructor(){this.dialog=M(F),this.mlabService=M(m),this.route=M(O),this.router=M(K),this.testGroup=this.route.snapshot.data.testGroup,this.tiles=[],this.appBarConfig={title:this.testGroup.name,subtitle:this.testGroup.description,backEnabled:!0};}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[f([]),c],decls:3,vars:2,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",0),l(1,"div",1),p(2,"sz-medisy-laboratory-test-group-test-types",2),u()),t&2&&(s("config",i.appBarConfig),n(2),s("testGroupId",i.testGroup.id));},dependencies:[ne,V,ue],encapsulation:2});let r=o;return r;})();var ce=[{path:"",component:k},{path:"specimen-types",loadComponent:()=>import("./chunk-MOH25AHK.js").then(r=>r.TestGroupSpecimenTypesComponent)}];var Gt=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=H({type:o}),o.ɵinj=q({providers:[m],imports:[N.forChild(ce),S,Z,L,V,y,Y,k]});let r=o;return r;})();export{Gt as TestGroupModule};/**i18n:fe59e4cec730fb22fcad5443103077b4b8cf7932d5cc1616a4c03edd493e1605*/