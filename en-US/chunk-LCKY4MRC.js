import"./chunk-E4HRQRBH.js";import{c as pe}from"./chunk-A3WCAN3U.js";import{a as w}from"./chunk-26XW6G2P.js";import{a as g,c as re,e as se,i as ae,j as ne}from"./chunk-Z6PUY476.js";import"./chunk-QV2ZQHMC.js";import"./chunk-IABH27XU.js";import{a as m}from"./chunk-ZOKV46RB.js";import"./chunk-O2HTTUKG.js";import{b as H,f as $,g as U,h as q,j as Q,k as y}from"./chunk-M637VPZN.js";import{a as Y}from"./chunk-T2EQVSUG.js";import{j as l,k as ie}from"./chunk-VK4CZRIZ.js";import{a as F,b as R,d as B,e as P,g as h}from"./chunk-LXPLDGFP.js";import{q as j,r as V}from"./chunk-QEZI75P7.js";import"./chunk-X34YPVYV.js";import"./chunk-TCCIVYCZ.js";import"./chunk-7WCYUC4Z.js";import"./chunk-PQYDHBBD.js";import"./chunk-JN2TNDGG.js";import{d as v,f as _,g as b,l as I,n as G,q as D,r as E,u as z}from"./chunk-BHO3RGW2.js";import{Y as oe,r as ee,t as A}from"./chunk-TGOP7ZDO.js";import{a as O,c as x,d as N}from"./chunk-BMCN66UE.js";import"./chunk-6RTBVNC4.js";import{ia as te,la as L}from"./chunk-O5CF5VDW.js";import"./chunk-X5L7PWWN.js";import{Fa as W,Jb as c,Kb as f,Lb as n,Wb as Z,ab as a,bb as p,ea as J,ja as d,mc as T,na as u,nc as S,oa as K,pb as M,yb as s}from"./chunk-2TFHNGIL.js";import"./chunk-IL567IQQ.js";var me=(()=>{let t=class t extends ${constructor(e,o,i,C){super(i),this.mlabService=e,this.fb=o,this.dialog=i,this.data=C,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:A.create().notAny("testGroups.testGroupId",this.data).filters()}),this.testTypeSelectConfig={multiple:!0},this.form=o.group({testTypeIds:[null,[v.required]]});}submit(){this.IsValid()&&this.save(this.mlabService.testGroups.testTypes.batchCreate(this.data,this.form.value.testTypeIds.map(e=>({testTypeId:e}))));}};t.ɵfac=function(o){return new(o||t)(p(m),p(E),p(F),p(R));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types-import"]],standalone:!0,features:[T([]),M,S],decls:5,vars:7,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[3,"actions"]];},template:function(o,i){o&1&&(n(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),n(3,"sz-ui-form-field-select",2),f()(),n(4,"sz-ui-dialog-actions",3)),o&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),s("formGroup",i.form),a(),s("source",i.testTypes)("config",i.testTypeSelectConfig),a(),s("actions",i.actions));},dependencies:[z,I,_,b,G,D,h,P,j,y,U,q,V],encapsulation:2});let r=t;return r;})();var de=(()=>{let t=class t extends ${constructor(e,o,i,C){super(i),this.mlabService=e,this.fb=o,this.dialog=i,this.data=C,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:ee.Or,filters:A.create().equalIf("id",this.data.testGroupTestType?.testTypeId).notAny("testGroups.testGroupId",this.data.testGroupId).filters()}),this.form=o.group({testTypeId:[C.testGroupTestType?.testTypeId,[v.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};t.ɵfac=function(o){return new(o||t)(p(m),p(E),p(F),p(R));},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[T([]),M,S],decls:5,vars:6,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(o,i){o&1&&(n(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),n(3,"sz-ui-form-field-select",2),f()(),n(4,"sz-ui-dialog-actions",3)),o&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),s("formGroup",i.form),a(),s("source",i.testTypes),a(),s("actions",i.actions));},dependencies:[z,I,_,b,G,D,h,P,j,y,U,q,V],encapsulation:2});let r=t;return r;})();var le=(()=>{let t=class t{constructor(){this.dialog=d(B),this.mlabService=d(m),this.route=d(O),this.dataSource=new re(),this.testGroupId=W.required(),this.card={header:{title:oe.test_types},menu:ie.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.import(this.openImportComponent.bind(this)),l.divider(),l.clear(this.openTestGroupTestTypesClearComponent.bind(this))])])},this.dataSource.columnDefs.push(g.uuid("id"),g.string("testType.nameEn"),g.date("createdAt").setVisible(!1),g.date("updatedAt").setVisible(!1),g.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTestGroupTestTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openImportComponent(){this.dialog.open(me,{data:this.testGroupId()}).afterClosed().subscribe(e=>{this.dataSource.add(e);});}openSaveComponent(e){this.dialog.open(de,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openTestGroupTestTypeDeleteComponent(e){this.dialog.open(Q,{data:H.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}openTestGroupTestTypesClearComponent(){this.dialog.open(Q,{data:H.delete(this.mlabService.testGroups.testTypes.batchDelete(this.testGroupId(),this.dataSource.getData().map(e=>e.id)))}).afterClosed().subscribe(e=>{e&&this.dataSource.clear();});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(se(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[S],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(o,i){o&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),Z("update",function(){return i.get();}),f()()),o&2&&(s("card",i.card),a(),s("dataSource",i.dataSource));},dependencies:[N,L,ne,ae,w],encapsulation:2});let r=t;return r;})();var k=(()=>{let t=class t{constructor(){this.dialog=d(B),this.mlabService=d(m),this.route=d(O),this.router=d(x),this.testGroup=this.route.snapshot.data.testGroup,this.tiles=[],this.appBarConfig={title:this.testGroup.name,subtitle:this.testGroup.description,backEnabled:!0};}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=u({type:t,selectors:[["sz-medisy-laboratory-test-group"]],standalone:!0,features:[T([]),S],decls:3,vars:2,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testGroupId"]],template:function(o,i){o&1&&(n(0,"sz-ui-app-bar",0),c(1,"div",1),n(2,"sz-medisy-laboratory-test-group-test-types",2),f()),o&2&&(s("config",i.appBarConfig),a(2),s("testGroupId",i.testGroup.id));},dependencies:[pe,Y,le],encapsulation:2});let r=t;return r;})();var ue=[{path:"",component:k},{path:"specimen-types",loadComponent:()=>import("./chunk-DNPA2ZBJ.js").then(r=>r.TestGroupSpecimenTypesComponent)}];var Et=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=K({type:t}),t.ɵinj=J({providers:[m],imports:[N.forChild(ue),h,te,L,Y,y,w,k]});let r=t;return r;})();export{Et as TestGroupModule};/**i18n:254aa6fe1cd18dc65995e6e9397465bfcd88a7e4c31f715b7e9eda5212bf646d*/