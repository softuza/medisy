import{a as Me,b as Oe,c as ye}from"./chunk-6YHPCQ3R.js";import{a as re}from"./chunk-PMHNQTAE.js";import{a as Ee}from"./chunk-27ZGL5D4.js";import{a as _,b as ee,d as te,f as ie,i as oe,j as ne}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-A54NTVFL.js";import"./chunk-EWRIL5TF.js";import{a as T}from"./chunk-TPAQ3FM3.js";import{e as Q,f as J,g as K,i as W,j as I,k as Z}from"./chunk-SB426TL2.js";import"./chunk-PP3NP7HU.js";import{a as H}from"./chunk-W3O4IPE3.js";import{h as g}from"./chunk-EKINQSBT.js";import{a as j,b as X,d as O,e as k,g as y}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import{c as ce,o as q,q as fe}from"./chunk-6LY23KCH.js";import{c as x}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import"./chunk-Y57UOOVT.js";import"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{d as z,f as Y,g as U,k as B,m as $,p as F,q as G,t as V}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{a as E,c as ue,e as M}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as Se,ia as w,ka as C}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Db as Te,Fa as R,Ib as p,Jb as l,Kb as d,Ub as L,Vb as S,Xb as P,ab as m,bb as s,ea as de,kc as f,lc as c,na as u,oa as _e,ob as A,ub as N,vb as v,wb as D,yb as a}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var Ce=(()=>{let i=class i extends Q{constructor(e,t,o,r){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=r,this.form=t.group({nameEn:[r.testTypeResultOption?.nameEn,[z.required]],description:[r.testTypeResultOption?.description,[]],abbreviation:[r.testTypeResultOption?.abbreviation,[]],nameAr:[r.testTypeResultOption?.nameAr,[]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(T),s(G),s(j),s(X));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[f([]),A,c],decls:8,vars:5,consts:()=>{let e;e="English Name";let t;t="Arabic Name";let o;o="Description";let r;return r="Abbreviation",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",e],["formControlName","nameAr","label",t],["formControlName","description","label",o],["formControlName","abbreviation","label",r],[3,"actions"]];},template:function(t,o){t&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),l()(),d(7,"sz-ui-dialog-actions",6)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(5),a("actions",o.actions));},dependencies:[V,B,Y,U,$,F,y,k,q,I,J,K,ce],encapsulation:2});let n=i;return n;})();var pe=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new te(),this.testTypeId=R.required(),this.dataSource.columnDefs.push(_.uuid("id"),_.string("nameEn").setStacked(_.string("nameAr").setValueClassFontSmall()),_.string("abbreviation"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),ee.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openTestTypeResultOptionDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Ce,{data:{testTypeId:this.testTypeId(),testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(W,{data:Z.delete(this.mlabService.testTypes.resultOptions.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testTypeId(),this.dataSource.getQuery()).pipe(x(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(O),s(T),s(E));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),S("changed",function(){return o.get();}),p(1,"button",2),S("click",function(){return o.openSaveComponent();}),p(2,"span"),L(3,0),l()()(),p(4,"sz-ui-table",3),S("update",function(){return o.get();}),l()),t&2&&(a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,w,ne,oe,ie],encapsulation:2});let n=i;return n;})();var Ie=(()=>{let i=class i extends Q{constructor(e,t,o,r){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=r,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=t.group({unitId:[r.testTypeUnit?.unitId,[z.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(T),s(G),s(j),s(X));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[f([]),A,c],decls:5,vars:6,consts:()=>{let e;return e="Unit",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",e,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2),l()(),d(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(),a("source",o.units),m(),a("actions",o.actions));},dependencies:[V,B,Y,U,$,F,y,k,q,I,J,K,fe],encapsulation:2});let n=i;return n;})();var le=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new te(),this.testTypeId=R.required(),this.dataSource.columnDefs.push(_.uuid("id"),_.uuid("unitId"),_.string("unit.name"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),ee.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openTestTypeUnitDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Ie,{data:{testTypeId:this.testTypeId(),testTypeUnit:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeUnitDeleteComponent(e){this.dialog.open(W,{data:Z.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.units.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.units.get(this.testTypeId(),this.dataSource.getQuery()).pipe(x(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(O),s(T),s(E));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),S("changed",function(){return o.get();}),p(1,"button",2),S("click",function(){return o.openSaveComponent();}),p(2,"span"),L(3,0),l()()(),p(4,"sz-ui-table",3),S("update",function(){return o.get();}),l()),t&2&&(a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,w,ne,oe,ie],encapsulation:2});let n=i;return n;})();var Ye=()=>[re],Ue=()=>[le],Be=()=>[pe];function $e(n,i){if(n&1&&d(0,"sz-medisy-laboratory-test-type-specimen-types",5),n&2){let b=P();a("testTypeId",b.testType.id);}}function Fe(n,i){if(n&1&&d(0,"sz-medisy-laboratory-test-type-units",5),n&2){let b=P();a("testTypeId",b.testType.id);}}function Ge(n,i){if(n&1&&d(0,"sz-medisy-laboratory-test-type-result-options",5),n&2){let b=P(2);a("testTypeId",b.testType.id);}}function Ve(n,i){n&1&&(p(0,"mat-tab",4),N(1,Ge,1,1),v(2,1,Be),D(),l());}var be=(()=>{let i=class i{constructor(e,t,o,r){this.dialog=e,this.mlabService=t,this.route=o,this.router=r,this.testType=this.route.snapshot.data.testType;}};i.ɵfac=function(t){return new(t||i)(s(O),s(T),s(E),s(ue));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[f([])],decls:11,vars:4,consts:()=>{let e;e="Specimen Types";let t;t="Units";let o;return o="Options",[[3,"title","subtitle","backEnabled"],["mat-stretch-tabs","false"],["label",e],["label",t],["label",o],[3,"testTypeId"]];},template:function(t,o){t&1&&(d(0,"sz-ui-app-bar",0),p(1,"mat-tab-group",1)(2,"mat-tab",2),N(3,$e,1,1),v(4,3,Ye),D(),l(),p(6,"mat-tab",3),N(7,Fe,1,1),v(8,7,Ue),D(),l(),N(10,Ve,4,0,"mat-tab",4),l()),t&2&&(a("title",o.testType.nameEn)("subtitle",o.testType.description)("backEnabled",!0),m(10),Te(o.testType.hasResultOptions?10:-1));},dependencies:[Me,Oe,H],encapsulation:2});let n=i;return n;})();var Ne=[{path:"",component:be},{path:"specimen-types",loadComponent:()=>import("./chunk-RBC7UKOF.js").then(n=>n.TestTypeSpecimenTypesComponent)}];var si=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=_e({type:i}),i.ɵinj=de({providers:[T],imports:[M.forChild(Ne),y,Se,C,ye,H,I,Ee,re,le,pe]});let n=i;return n;})();export{si as TestTypeModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/