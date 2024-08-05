import{c as Me}from"./chunk-2INYNTAT.js";import{a as te}from"./chunk-CCXBZKGC.js";import{a as h}from"./chunk-LRMAXIYS.js";import{a as m,b as J,d as K,e as W,j as Z,k as ee}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import"./chunk-3Q7NLQRN.js";import{a as l}from"./chunk-5IHQNMKH.js";import"./chunk-HAWQZ3DL.js";import{e as x,f as k,g as q,i as H,j as v,k as Q}from"./chunk-CZ3NOAZC.js";import{a as X}from"./chunk-4APH4GGR.js";import{h as f,j as w}from"./chunk-3HX3ISKW.js";import{a as V,b as Y,d as C,e as $,g as E}from"./chunk-T2IQKITO.js";import{c as _e,r as j,s as ye}from"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as G}from"./chunk-K3B67OJW.js";import"./chunk-SNWVCYUD.js";import{d as D,f as R,g as z,l as L,n as P,q as B,r as F,u as U}from"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{a as y,c as Te,e as M}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as fe,la as g}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Eb as se,Fa as I,Jb as u,Kb as c,Lb as d,Wb as N,Yb as pe,bb as p,cb as s,ea as le,hc as ce,ja as O,jc as Se,na as S,nc as _,oa as ue,oc as T,qb as A,vb as ae,zb as a}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var Ce=(()=>{let i=class i extends x{constructor(t,e,o,n){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({nameEn:[n.testTypeResultOption?.nameEn,[D.required]],description:[n.testTypeResultOption?.description,[]],abbreviation:[n.testTypeResultOption?.abbreviation,[]],nameAr:[n.testTypeResultOption?.nameAr,[]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(l),s(F),s(V),s(Y));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[_([]),A,T],decls:8,vars:5,consts:()=>{let t;t="English Name";let e;e="Arabic Name";let o;o="Description";let n;return n="Abbreviation",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","description","label",o],["formControlName","abbreviation","label",n],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),c()(),d(7,"sz-ui-dialog-actions",6)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),a("formGroup",o.form),p(5),a("actions",o.actions));},dependencies:[U,L,R,z,P,B,E,$,j,v,k,q,_e],encapsulation:2});let r=i;return r;})();var ie=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.dataSource=new K(),this.testTypeId=I.required(),this.card={title:G.result_options,menu:w.more([f.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.string("nameEn").setStacked(m.string("nameAr").setValueClassFontSmall()),m.string("abbreviation"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),J.menu([f.edit(n=>this.openSaveComponent(n)),f.delete(n=>this.openTestTypeResultOptionDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(t){this.dialog.open(Ce,{data:{testTypeId:this.testTypeId(),testTypeResultOption:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeResultOptionDeleteComponent(t){this.dialog.open(H,{data:Q.delete(this.mlabService.testTypes.resultOptions.delete(t.testTypeId,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}updateItem(t){this.mlabService.testTypes.resultOptions.update(t.testTypeId,t.id,t).subscribe(e=>{this.dataSource.update(e);});}get(){this.mlabService.testTypes.resultOptions.get(this.testTypeId(),this.dataSource.getQuery()).pipe(W(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(C),s(l),s(y));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(e,o){e&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),N("update",function(){return o.get();}),c()()),e&2&&(a("card",o.card),p(),a("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[M,g,ee,Z,h],encapsulation:2});let r=i;return r;})();var Ee=(()=>{let i=class i extends x{constructor(t,e,o,n){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=n,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=e.group({unitId:[n.testTypeUnit?.unitId,[D.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(l),s(F),s(V),s(Y));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[_([]),A,T],decls:5,vars:6,consts:()=>{let t;return t="Unit",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",t,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2),c()(),d(4,"sz-ui-dialog-actions",3)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),a("formGroup",o.form),p(),a("source",o.units),p(),a("actions",o.actions));},dependencies:[U,L,R,z,P,B,E,$,j,v,k,q,ye],encapsulation:2});let r=i;return r;})();var oe=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.dataSource=new K(),this.testTypeId=I.required(),this.card={title:G.units,menu:w.more([f.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("unitId"),m.string("unit.name"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),J.menu([f.edit(n=>this.openSaveComponent(n)),f.delete(n=>this.openTestTypeUnitDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(t){this.dialog.open(Ee,{data:{testTypeId:this.testTypeId(),testTypeUnit:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeUnitDeleteComponent(t){this.dialog.open(H,{data:Q.delete(this.mlabService.testTypes.units.delete(t.testTypeId,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}updateItem(t){this.mlabService.testTypes.units.update(t.testTypeId,t.id,t).subscribe(e=>{this.dataSource.update(e);});}get(){this.mlabService.testTypes.units.get(this.testTypeId(),this.dataSource.getQuery()).pipe(W(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(C),s(l),s(y));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(e,o){e&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),N("update",function(){return o.get();}),c()()),e&2&&(a("card",o.card),p(),a("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[M,g,ee,Z,h],encapsulation:2});let r=i;return r;})();function Re(r,i){if(r&1&&(u(0,"p"),ce(1),c()),r&2){let re=pe();p(),Se(" ",re.testType.description,`
`);}}function ze(r,i){if(r&1&&d(0,"sz-medisy-laboratory-test-type-result-options",2),r&2){let re=pe();a("testTypeId",re.testType.id);}}var ge=(()=>{let i=class i{constructor(){this.dialog=O(C),this.mlabService=O(l),this.route=O(y),this.router=O(Te),this.testType=this.route.snapshot.data.testType,this.appBarConfig={title:this.testType.nameEn,backEnabled:!0};}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[_([])],decls:6,vars:5,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testTypeId"]],template:function(e,o){e&1&&(d(0,"sz-ui-app-bar",0),ae(1,Re,2,1,"p"),u(2,"div",1),d(3,"sz-medisy-laboratory-test-type-specimen-types",2)(4,"sz-medisy-laboratory-test-type-units",2),ae(5,ze,1,1,"sz-medisy-laboratory-test-type-result-options",2),c()),e&2&&(a("config",o.appBarConfig),p(),se(o.testType.description?1:-1),p(2),a("testTypeId",o.testType.id),p(),a("testTypeId",o.testType.id),p(),se(o.testType.hasResultOptions?5:-1));},dependencies:[X,te,oe,ie],encapsulation:2});let r=i;return r;})();var he=[{path:"",component:ge},{path:"specimen-types",loadComponent:()=>import("./chunk-GABA7K4D.js").then(r=>r.TestTypeSpecimenTypesComponent)}];var ti=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=ue({type:i}),i.ɵinj=le({providers:[l],imports:[M.forChild(he),E,fe,g,Me,X,v,h,te,oe,ie]});let r=i;return r;})();export{ti as TestTypeModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/