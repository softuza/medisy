import{c as ye}from"./chunk-DEDCJZVG.js";import{a as ee}from"./chunk-QZWBFQOR.js";import{a as v}from"./chunk-HIF2EYTK.js";import{a as m,b as J,d as K,i as W,j as Z}from"./chunk-ODWHN3HO.js";import"./chunk-V3IDSUBA.js";import"./chunk-XHAJJGHN.js";import"./chunk-4WMKGAQA.js";import{a as l}from"./chunk-E4K3ZOYS.js";import"./chunk-J3ZGTMT7.js";import{e as x,f as k,g as q,i as H,j as h,k as Q}from"./chunk-I247VJZ7.js";import"./chunk-5XS2JNPH.js";import{a as X}from"./chunk-3TCVELMY.js";import{h as f,j as w}from"./chunk-VN32AWOL.js";import{a as B,b as V,d as C,e as Y,g as E}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as fe,j as $,t as G,v as _e}from"./chunk-V5AOIWG3.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as j}from"./chunk-NXGV7MLA.js";import"./chunk-4MKCL2OB.js";import{d as N,f as R,g as D,k as z,m as L,p as P,q as F,t as U}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{a as y,c as Se,e as M}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as Te,ka as g}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Db as pe,Fa as b,Ib as u,Jb as c,Kb as d,Vb as A,Xb as me,ab as p,bb as a,ea as de,ec as ue,gc as ce,kc as _,lc as T,na as S,oa as le,ob as I,ub as se,yb as s}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var Me=(()=>{let i=class i extends x{constructor(t,e,o,n){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({nameEn:[n.testTypeResultOption?.nameEn,[N.required]],description:[n.testTypeResultOption?.description,[]],abbreviation:[n.testTypeResultOption?.abbreviation,[]],nameAr:[n.testTypeResultOption?.nameAr,[]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(l),a(F),a(B),a(V));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[_([]),I,T],decls:8,vars:5,consts:()=>{let t;t="English Name";let e;e="Arabic Name";let o;o="Description";let n;return n="Abbreviation",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","description","label",o],["formControlName","abbreviation","label",n],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),c()(),d(7,"sz-ui-dialog-actions",6)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),s("formGroup",o.form),p(5),s("actions",o.actions));},dependencies:[U,z,R,D,L,P,E,Y,G,h,k,q,fe],encapsulation:2});let r=i;return r;})();var oe=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.dataSource=new K(),this.testTypeId=b.required(),this.card={title:j.result_options,menu:w.more([f.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.string("nameEn").setStacked(m.string("nameAr").setValueClassFontSmall()),m.string("abbreviation"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),J.menu([f.edit(n=>this.openSaveComponent(n)),f.delete(n=>this.openTestTypeResultOptionDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(t){this.dialog.open(Me,{data:{testTypeId:this.testTypeId(),testTypeResultOption:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeResultOptionDeleteComponent(t){this.dialog.open(H,{data:Q.delete(this.mlabService.testTypes.resultOptions.delete(t.testTypeId,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}updateItem(t){this.mlabService.testTypes.resultOptions.update(t.testTypeId,t.id,t).subscribe(e=>{this.dataSource.update(e);});}get(){this.mlabService.testTypes.resultOptions.get(this.testTypeId(),this.dataSource.getQuery()).pipe($(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(C),a(l),a(y));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(e,o){e&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),A("update",function(){return o.get();}),c()()),e&2&&(s("card",o.card),p(),s("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[M,g,Z,W,v],encapsulation:2});let r=i;return r;})();var Ee=(()=>{let i=class i extends x{constructor(t,e,o,n){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=n,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=e.group({unitId:[n.testTypeUnit?.unitId,[N.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(l),a(F),a(B),a(V));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[_([]),I,T],decls:5,vars:6,consts:()=>{let t;return t="Unit",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",t,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2),c()(),d(4,"sz-ui-dialog-actions",3)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),s("formGroup",o.form),p(),s("source",o.units),p(),s("actions",o.actions));},dependencies:[U,z,R,D,L,P,E,Y,G,h,k,q,_e],encapsulation:2});let r=i;return r;})();var re=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.dataSource=new K(),this.testTypeId=b.required(),this.card={title:j.units,menu:w.more([f.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("unitId"),m.string("unit.name"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),J.menu([f.edit(n=>this.openSaveComponent(n)),f.delete(n=>this.openTestTypeUnitDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(t){this.dialog.open(Ee,{data:{testTypeId:this.testTypeId(),testTypeUnit:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeUnitDeleteComponent(t){this.dialog.open(H,{data:Q.delete(this.mlabService.testTypes.units.delete(t.testTypeId,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}updateItem(t){this.mlabService.testTypes.units.update(t.testTypeId,t.id,t).subscribe(e=>{this.dataSource.update(e);});}get(){this.mlabService.testTypes.units.get(this.testTypeId(),this.dataSource.getQuery()).pipe($(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(C),a(l),a(y));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(e,o){e&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),A("update",function(){return o.get();}),c()()),e&2&&(s("card",o.card),p(),s("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[M,g,Z,W,v],encapsulation:2});let r=i;return r;})();function Re(r,i){if(r&1&&(u(0,"p"),ue(1),c()),r&2){let ne=me();p(),ce(" ",ne.testType.description,`
`);}}function De(r,i){if(r&1&&d(0,"sz-medisy-laboratory-test-type-result-options",2),r&2){let ne=me();s("testTypeId",ne.testType.id);}}var ge=(()=>{let i=class i{constructor(t,e,o,n){this.dialog=t,this.mlabService=e,this.route=o,this.router=n,this.testType=this.route.snapshot.data.testType;}};i.ɵfac=function(e){return new(e||i)(a(C),a(l),a(y),a(Se));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[_([])],decls:6,vars:6,consts:[[3,"title","backEnabled"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testTypeId"]],template:function(e,o){e&1&&(d(0,"sz-ui-app-bar",0),se(1,Re,2,1,"p"),u(2,"div",1),d(3,"sz-medisy-laboratory-test-type-specimen-types",2)(4,"sz-medisy-laboratory-test-type-units",2),se(5,De,1,1,"sz-medisy-laboratory-test-type-result-options",2),c()),e&2&&(s("title",o.testType.nameEn)("backEnabled",!0),p(),pe(o.testType.description?1:-1),p(2),s("testTypeId",o.testType.id),p(),s("testTypeId",o.testType.id),p(),pe(o.testType.hasResultOptions?5:-1));},dependencies:[X,ee,re,oe],encapsulation:2});let r=i;return r;})();var ve=[{path:"",component:ge},{path:"specimen-types",loadComponent:()=>import("./chunk-7ODUMJ5I.js").then(r=>r.TestTypeSpecimenTypesComponent)}];var Zt=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=le({type:i}),i.ɵinj=de({providers:[l],imports:[M.forChild(ve),E,Te,g,ye,X,h,v,ee,re,oe]});let r=i;return r;})();export{Zt as TestTypeModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/