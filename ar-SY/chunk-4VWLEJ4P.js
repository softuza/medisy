import"./chunk-HUMV6CZ7.js";import{c as me}from"./chunk-RQY53CVQ.js";import{a as V}from"./chunk-H7B2FXCV.js";import{a as M,b as re,d as se,e as ae,j as ne,k as pe}from"./chunk-YWT2EA4M.js";import"./chunk-L4AIUAS4.js";import"./chunk-72FHVNNU.js";import"./chunk-GO5Q2O4Z.js";import{a as d}from"./chunk-EY27VXMI.js";import"./chunk-V5DZRW4C.js";import"./chunk-UBUNO3NI.js";import{e as Y,f as w,g as $,i as oe,j as y,k as ie}from"./chunk-KVT2Y44B.js";import{a as j}from"./chunk-ZCG62LHU.js";import{h,j as te}from"./chunk-IGQXTHNA.js";import{a as N,b as A,d as R,e as F,g as T}from"./chunk-ARJDRL2D.js";import"./chunk-ILMMVNTQ.js";import{v as P,x as B}from"./chunk-QOPKBTR3.js";import"./chunk-SV7OQSW7.js";import"./chunk-CXCVSTK4.js";import{c as ee}from"./chunk-WP4QADEO.js";import"./chunk-5TZ2K576.js";import{d as v,f as C,g as _,l as b,n as I,q as E,r as D,u as G}from"./chunk-S24KQKNZ.js";import{t as Z}from"./chunk-WZNJXRSX.js";import{a as z,c as W,e as O}from"./chunk-XU6WJOFR.js";import"./chunk-MOKWSACW.js";import{ia as x,la as L}from"./chunk-57EQYW4O.js";import"./chunk-2UTMVH6A.js";import{Fa as J,Jb as u,Kb as c,Lb as m,Wb as K,bb as n,cb as s,ea as H,na as l,nc as S,oa as Q,oc as f,qb as g,zb as a}from"./chunk-OD2PBDQL.js";import"./chunk-MYK76I3Y.js";var de=(()=>{let o=class o extends Y{constructor(e,t,i,p){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=p,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:Z.create().notAny("testGroups.testGroupId",this.data).filters()}),this.form=t.group({testTypeIds:[null,[v.required]]});}submit(){this.IsValid()&&this.save(this.mlabService.testGroups.testTypes.batchCreate(this.data,this.form.value.testTypeIds.map(e=>({testTypeId:e}))));}};o.ɵfac=function(t){return new(t||o)(s(d),s(D),s(N),s(A));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-import"]],standalone:!0,features:[S([]),g,f],decls:5,vars:7,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","multiple"],[3,"actions"]];},template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),c()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),a("formGroup",i.form),n(),a("source",i.testTypes)("multiple",!0),n(),a("actions",i.actions));},dependencies:[G,b,C,_,I,E,T,F,P,y,w,$,B],encapsulation:2});let r=o;return r;})();var le=(()=>{let o=class o extends Y{constructor(e,t,i,p){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=p,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({testTypeId:[p.testGroupTestType?.testTypeId,[v.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(s(d),s(D),s(N),s(A));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[S([]),g,f],decls:5,vars:6,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),c()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),a("formGroup",i.form),n(),a("source",i.testTypes),n(),a("actions",i.actions));},dependencies:[G,b,C,_,I,E,T,F,P,y,w,$,B],encapsulation:2});let r=o;return r;})();var ue=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new se(),this.testGroupId=J.required(),this.card={title:ee.test_types,menu:te.more([h.add(()=>this.openSaveComponent()),h.import(()=>this.openImportComponent())])},this.dataSource.columnDefs.push(M.uuid("id"),M.string("testType.nameEn"),M.date("createdAt").setVisible(!1),M.date("updatedAt").setVisible(!1),re.menu([h.edit(p=>this.openSaveComponent(p)),h.delete(p=>this.openTestTypeSpecimenTypeDeleteComponent(p))]));}ngOnInit(){this.get();}openImportComponent(){this.dialog.open(de,{data:this.testGroupId()}).afterClosed().subscribe(e=>{this.dataSource.add(e);});}openSaveComponent(e){this.dialog.open(le,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(oe,{data:ie.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(ae(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(s(R),s(d),s(z));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[f],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),K("update",function(){return i.get();}),c()()),t&2&&(a("card",i.card),n(),a("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[O,L,pe,ne,V],encapsulation:2});let r=o;return r;})();var k=(()=>{let o=class o{constructor(e,t,i,p){this.dialog=e,this.mlabService=t,this.route=i,this.router=p,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup;}};o.ɵfac=function(t){return new(t||o)(s(R),s(d),s(z),s(W));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[S([]),f],decls:3,vars:4,consts:[[3,"title","subtitle","backEnabled"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(t,i){t&1&&(m(0,"sz-ui-app-bar",0),u(1,"div",1),m(2,"sz-medisy-laboratory-test-group-test-types",2),c()),t&2&&(a("title",i.testGroup.name)("subtitle",i.testGroup.description)("backEnabled",!0),n(2),a("testGroupId",i.testGroup.id));},dependencies:[me,j,ue],encapsulation:2});let r=o;return r;})();var ce=[{path:"",component:k},{path:"specimen-types",loadComponent:()=>import("./chunk-OYKRF4EQ.js").then(r=>r.TestGroupSpecimenTypesComponent)}];var It=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=Q({type:o}),o.ɵinj=H({providers:[d],imports:[O.forChild(ce),T,x,L,j,y,V,k]});let r=o;return r;})();export{It as TestGroupModule};/**i18n:4fd1e3784121426a165aad39e5b179e99241f431f66c0843478e7b7dba7da7b9*/