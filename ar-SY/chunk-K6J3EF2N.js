import"./chunk-4KNCQCFX.js";import{c as pe}from"./chunk-BDPYD3MU.js";import{a as w}from"./chunk-EW6N7LBZ.js";import{a as g,c as re,e as se,i as ae,j as ne}from"./chunk-B4A2V7XU.js";import"./chunk-5TVHWUQF.js";import"./chunk-FLYZTQVP.js";import{a as m}from"./chunk-INUEVVSF.js";import"./chunk-MB447KBV.js";import{b as H,f as $,g as U,h as q,j as Q,k as y}from"./chunk-OZNM4F5S.js";import{a as Y}from"./chunk-MOAPW72V.js";import{j as l,k as ie}from"./chunk-LZ3HWPNB.js";import{a as F,b as R,d as B,e as P,g as h}from"./chunk-YEM3GD5L.js";import{q as j,r as V}from"./chunk-F6DYKLPX.js";import"./chunk-ZPIO6CFV.js";import"./chunk-264QKOH6.js";import"./chunk-UJCEDBUS.js";import"./chunk-H7W7YGPD.js";import"./chunk-VNEAS3P2.js";import{d as v,f as _,g as b,l as I,n as G,q as D,r as E,u as z}from"./chunk-ER7WHOJP.js";import{Y as oe,r as ee,t as A}from"./chunk-6JNKTIUK.js";import{a as O,c as x,e as N}from"./chunk-NBEPCNAY.js";import"./chunk-THXYLS24.js";import{ia as te,la as L}from"./chunk-UUEM5JJT.js";import"./chunk-PSZD7437.js";import{Fa as W,Kb as c,Lb as f,Mb as n,Xb as Z,bb as a,cb as p,ea as J,ja as d,na as u,nc as T,oa as K,oc as S,qb as M,zb as s}from"./chunk-IKPHE33N.js";import"./chunk-EAIILSS5.js";var me=(()=>{let t=class t extends ${constructor(e,o,i,C){super(i),this.mlabService=e,this.fb=o,this.dialog=i,this.data=C,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:A.create().notAny("testGroups.testGroupId",this.data).filters()}),this.testTypeSelectConfig={multiple:!0},this.form=o.group({testTypeIds:[null,[v.required]]});}submit(){this.IsValid()&&this.save(this.mlabService.testGroups.testTypes.batchCreate(this.data,this.form.value.testTypeIds.map(e=>({testTypeId:e}))));}};t.ɵfac=function(o){return new(o||t)(p(m),p(E),p(F),p(R));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types-import"]],standalone:!0,features:[T([]),M,S],decls:5,vars:7,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[3,"actions"]];},template:function(o,i){o&1&&(n(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),n(3,"sz-ui-form-field-select",2),f()(),n(4,"sz-ui-dialog-actions",3)),o&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),s("formGroup",i.form),a(),s("source",i.testTypes)("config",i.testTypeSelectConfig),a(),s("actions",i.actions));},dependencies:[z,I,_,b,G,D,h,P,j,y,U,q,V],encapsulation:2});let r=t;return r;})();var de=(()=>{let t=class t extends ${constructor(e,o,i,C){super(i),this.mlabService=e,this.fb=o,this.dialog=i,this.data=C,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:ee.Or,filters:A.create().equalIf("id",this.data.testGroupTestType?.testTypeId).notAny("testGroups.testGroupId",this.data.testGroupId).filters()}),this.form=o.group({testTypeId:[C.testGroupTestType?.testTypeId,[v.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};t.ɵfac=function(o){return new(o||t)(p(m),p(E),p(F),p(R));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[T([]),M,S],decls:5,vars:6,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(o,i){o&1&&(n(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),n(3,"sz-ui-form-field-select",2),f()(),n(4,"sz-ui-dialog-actions",3)),o&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),s("formGroup",i.form),a(),s("source",i.testTypes),a(),s("actions",i.actions));},dependencies:[z,I,_,b,G,D,h,P,j,y,U,q,V],encapsulation:2});let r=t;return r;})();var le=(()=>{let t=class t{constructor(){this.dialog=d(B),this.mlabService=d(m),this.route=d(O),this.dataSource=new re(),this.testGroupId=W.required(),this.card={header:{title:oe.test_types},menu:ie.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.import(this.openImportComponent.bind(this)),l.divider(),l.clear(this.openTestGroupTestTypesClearComponent.bind(this))])])},this.dataSource.columnDefs.push(g.uuid("id"),g.string("testType.nameEn"),g.date("createdAt").setVisible(!1),g.date("updatedAt").setVisible(!1),g.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTestGroupTestTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openImportComponent(){this.dialog.open(me,{data:this.testGroupId()}).afterClosed().subscribe(e=>{this.dataSource.add(e);});}openSaveComponent(e){this.dialog.open(de,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openTestGroupTestTypeDeleteComponent(e){this.dialog.open(Q,{data:H.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}openTestGroupTestTypesClearComponent(){this.dialog.open(Q,{data:H.delete(this.mlabService.testGroups.testTypes.batchDelete(this.testGroupId(),this.dataSource.getData().map(e=>e.id)))}).afterClosed().subscribe(e=>{e&&this.dataSource.clear();});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(se(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[S],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(o,i){o&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),Z("update",function(){return i.get();}),f()()),o&2&&(s("card",i.card),a(),s("dataSource",i.dataSource));},dependencies:[N,L,ne,ae,w],encapsulation:2});let r=t;return r;})();var k=(()=>{let t=class t{constructor(){this.dialog=d(B),this.mlabService=d(m),this.route=d(O),this.router=d(x),this.testGroup=this.route.snapshot.data.testGroup,this.tiles=[],this.appBarConfig={title:this.testGroup.name,subtitle:this.testGroup.description,backEnabled:!0};}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[T([]),S],decls:3,vars:2,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(o,i){o&1&&(n(0,"sz-ui-app-bar",0),c(1,"div",1),n(2,"sz-medisy-laboratory-test-group-test-types",2),f()),o&2&&(s("config",i.appBarConfig),a(2),s("testGroupId",i.testGroup.id));},dependencies:[pe,Y,le],encapsulation:2});let r=t;return r;})();var ue=[{path:"",component:k},{path:"specimen-types",loadComponent:()=>import("./chunk-Z3I4LV7G.js").then(r=>r.TestGroupSpecimenTypesComponent)}];var Et=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=K({type:t}),t.ɵinj=J({providers:[m],imports:[N.forChild(ue),h,te,L,Y,y,w,k]});let r=t;return r;})();export{Et as TestGroupModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/