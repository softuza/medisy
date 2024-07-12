import{a as ne}from"./chunk-L72C3RJI.js";import{c as ae}from"./chunk-4V5WHF3S.js";import{a as I}from"./chunk-HIF2EYTK.js";import{a as S,b as oe,d as ie,i as re,j as se}from"./chunk-NBZRVN3Y.js";import"./chunk-V3IDSUBA.js";import"./chunk-72QARLDS.js";import"./chunk-4WMKGAQA.js";import{a as m}from"./chunk-E4K3ZOYS.js";import"./chunk-4XEE4I4T.js";import{e as W,f as Z,g as x,i as ee,j as G,k as te}from"./chunk-JDQ4W3QS.js";import"./chunk-5XS2JNPH.js";import{a as C}from"./chunk-3TCVELMY.js";import{h as b,j as K}from"./chunk-VN32AWOL.js";import{a as $,b as k,d as v,e as q,g}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{j as X,t as Q,v as J}from"./chunk-HZVTZU6E.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as H}from"./chunk-NXGV7MLA.js";import"./chunk-QN2XJZ42.js";import{d as N,f as R,g as L,l as j,n as P,q as B,r as w,u as V}from"./chunk-YQYD3PHP.js";import"./chunk-FDTJH5UN.js";import{a as T,c as Y,e as h}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as U,ka as M}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Fa as A,Ib as l,Jb as c,Kb as d,Vb as F,ab as p,bb as s,ea as D,kc as y,lc as f,na as u,oa as E,ob as O,yb as a}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var de=(()=>{let t=class t extends W{constructor(o,e,i,n){super(i),this.mlabService=o,this.fb=e,this.dialog=i,this.data=n,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.form=e.group({testTypeId:[n.testGroupTestType?.testTypeId,[N.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(s(m),s(w),s($),s(k));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[y([]),O,f],decls:5,vars:6,consts:()=>{let o;return o="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",o,3,"source"],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2),c()(),d(4,"sz-ui-dialog-actions",3)),e&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),a("formGroup",i.form),p(),a("source",i.testTypes),p(),a("actions",i.actions));},dependencies:[V,j,R,L,P,B,g,q,Q,G,Z,x,J],encapsulation:2});let r=t;return r;})();var ue=(()=>{let t=class t{constructor(o,e,i){this.dialog=o,this.mlabService=e,this.route=i,this.dataSource=new ie(),this.testGroupId=A.required(),this.card={title:H.test_types,menu:K.more([b.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(S.uuid("id"),S.string("testType.nameEn"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),oe.menu([b.edit(n=>this.openSaveComponent(n)),b.delete(n=>this.openTestTypeSpecimenTypeDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(de,{data:{testGroupId:this.testGroupId(),testGroupTestType:o}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeSpecimenTypeDeleteComponent(o){this.dialog.open(ee,{data:te.delete(this.mlabService.testGroups.testTypes.delete(o.testGroupId,o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}updateItem(o){this.mlabService.testGroups.testTypes.update(o.testTypeId,o.id,o).subscribe(e=>{this.dataSource.update(e);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(X(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(s(v),s(m),s(T));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[f],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(e,i){e&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),F("update",function(){return i.get();}),c()()),e&2&&(a("card",i.card),p(),a("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[h,M,se,re,I],encapsulation:2});let r=t;return r;})();var z=(()=>{let t=class t{constructor(o,e,i,n){this.dialog=o,this.mlabService=e,this.route=i,this.router=n,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup;}};t.ɵfac=function(e){return new(e||t)(s(v),s(m),s(T),s(Y));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[y([]),f],decls:4,vars:5,consts:[[3,"title","subtitle","backEnabled"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(e,i){e&1&&(d(0,"sz-ui-app-bar",0),l(1,"div",1),d(2,"sz-medisy-laboratory-test-group-test-types",2)(3,"sz-medisy-laboratory-test-group-specimen-types",2),c()),e&2&&(a("title",i.testGroup.name)("subtitle",i.testGroup.description)("backEnabled",!0),p(2),a("testGroupId",i.testGroup.id),p(),a("testGroupId",i.testGroup.id));},dependencies:[ae,C,ue,ne],encapsulation:2});let r=t;return r;})();var le=[{path:"",component:z},{path:"specimen-types",loadComponent:()=>import("./chunk-6XSDMN3V.js").then(r=>r.TestGroupSpecimenTypesComponent)}];var ut=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=E({type:t}),t.ɵinj=D({providers:[m],imports:[h.forChild(le),g,U,M,C,G,I,z]});let r=t;return r;})();export{ut as TestGroupModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/