import{a as fe,b as Ee,c as Me}from"./chunk-RVWTG27I.js";import{a as re}from"./chunk-HO445S23.js";import{a as ce}from"./chunk-4WXPFVLO.js";import"./chunk-LLI445KO.js";import{a as S,b as Z,d as ee,f as te,i as ie,j as oe}from"./chunk-W5EKA45P.js";import"./chunk-GANFR7F4.js";import"./chunk-Z4TWWZUI.js";import"./chunk-RWDFLCXR.js";import{a as d}from"./chunk-R6UM4SG5.js";import{e as x,f as Q,g as J,i as K,j as N,k as W}from"./chunk-NHCTASKL.js";import"./chunk-3HSHJW6B.js";import{b as q}from"./chunk-SVG5RMLM.js";import{h as g}from"./chunk-ZG7TD6PA.js";import{a as G,b as V,d as O,e as j,g as y}from"./chunk-EJJSD5UB.js";import"./chunk-SSASL3ZT.js";import{c as Te,o as H,q as ue}from"./chunk-ILYIUFTB.js";import{c as k}from"./chunk-SNUH52NX.js";import"./chunk-U7ZOM2YQ.js";import"./chunk-AZIHVEHP.js";import{c as w}from"./chunk-4533BRGQ.js";import"./chunk-WQK2CTKL.js";import{d as I,f as z,g as P,k as Y,m as U,p as $,q as B,t as F}from"./chunk-YFLYFTNW.js";import"./chunk-HBG37XGG.js";import{a as E,c as de,e as M}from"./chunk-TXI72R6B.js";import"./chunk-CFWDSB5H.js";import{ha as Se,ia as X,ka as C}from"./chunk-M5SMZ234.js";import"./chunk-EIB4LKCD.js";import{Ab as b,Bb as v,Db as s,Nb as p,Ob as l,Pb as m,Zb as D,_b as u,hb as _,ib as a,ka as me,pc as f,qc as c,ua as T,ub as L,va as _e,zb as A}from"./chunk-NXFEVB6F.js";var Oe=(()=>{let i=class i extends x{constructor(e,t,o,n){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=n,this.form=t.group({name:[n.testTypeResultOption?.name,[I.required]],description:[n.testTypeResultOption?.description,[]],abbreviation:[n.testTypeResultOption?.abbreviation,[]],localizedName:[n.testTypeResultOption?.localizedName,[]],value:[n.testTypeResultOption?.value,[I.required]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(a(d),a(B),a(G),a(V));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[f([]),L,c],decls:9,vars:4,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let o;o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u0631\u062C\u0645";let n;n="\u0623\u062E\u062A\u0635\u0627\u0631";let le;return le="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","localizedName","label",o],["formControlName","abbreviation","label",n],["formControlName","value","label",le,3,"type"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-input",6),l()(),m(8,"sz-ui-dialog-actions",7)),t&2&&(s("header",o.header),_(2),s("formGroup",o.form),_(5),s("type","number"),_(),s("actions",o.actions));},dependencies:[F,Y,z,P,U,$,y,j,H,N,Q,J,Te],encapsulation:2});let r=i;return r;})();var se=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=w.units,this.dataSource=new ee(),this.testType=this.route.snapshot.data.testType,this.dataSource.columnDefs.push(S.uuid("id"),S.string("name").setStacked(S.string("localizedName").setValueClassFontSmall()),S.date("createdAt",!1),S.date("updatedAt",!1),Z.menu([g.edit(n=>this.openSaveComponent(n)),g.delete(n=>this.openTestTypeResultOptionDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(Oe,{data:{testTypeId:this.testType.id,testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testType.id,this.dataSource.getQuery()).pipe(k(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(a(O),a(d),a(E));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),p(1,"button",2),u("click",function(){return o.openSaveComponent();}),p(2,"span"),D(3,0),l()()(),p(4,"sz-ui-table",3),u("update",function(){return o.get();}),l()),t&2&&(s("dataSource",o.dataSource),_(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,X,oe,ie,te],encapsulation:2});let r=i;return r;})();var Ce=(()=>{let i=class i extends x{constructor(e,t,o,n){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=n,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=t.group({unitId:[n.testTypeUnit?.unitId,[I.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(a(d),a(B),a(G),a(V));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[f([]),L,c],decls:5,vars:4,consts:()=>{let e;return e="\u0648\u0627\u062D\u062F\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",e,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),l()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",o.header),_(2),s("formGroup",o.form),_(),s("source",o.units),_(),s("actions",o.actions));},dependencies:[F,Y,z,P,U,$,y,j,H,N,Q,J,ue],encapsulation:2});let r=i;return r;})();var pe=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=w.units,this.dataSource=new ee(),this.testType=this.route.snapshot.data.testType,this.dataSource.columnDefs.push(S.uuid("id"),S.uuid("unitId"),S.string("unit.name"),S.date("createdAt",!1),S.date("updatedAt",!1),Z.menu([g.edit(n=>this.openSaveComponent(n)),g.delete(n=>this.openTestTypeUnitDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(Ce,{data:{testTypeId:this.testType.id,testTypeUnit:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeUnitDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.units.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.units.get(this.testType.id,this.dataSource.getQuery()).pipe(k(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(a(O),a(d),a(E));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),p(1,"button",2),u("click",function(){return o.openSaveComponent();}),p(2,"span"),D(3,0),l()()(),p(4,"sz-ui-table",3),u("update",function(){return o.get();}),l()),t&2&&(s("dataSource",o.dataSource),_(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,X,oe,ie,te],encapsulation:2});let r=i;return r;})();var ze=()=>[re],Pe=()=>[pe],Ye=()=>[se];function Ue(r,i){r&1&&m(0,"sz-medisy-laboratory-test-type-specimen-types");}function $e(r,i){r&1&&m(0,"sz-medisy-laboratory-test-type-units");}function Be(r,i){r&1&&m(0,"sz-medisy-laboratory-test-type-result-options");}var ge=(()=>{let i=class i{constructor(e,t,o,n){this.dialog=e,this.mlabService=t,this.route=o,this.router=n,this.testType=this.route.snapshot.data.testType;}};i.ɵfac=function(t){return new(t||i)(a(O),a(d),a(E),a(de));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[f([])],decls:14,vars:2,consts:()=>{let e;e="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A";let t;t="\u0627\u0644\u0648\u062D\u062F\u0627\u062A";let o;return o="Options",[[3,"title","subtitle"],["mat-stretch-tabs","false"],["label",e],["label",t],["label",o]];},template:function(t,o){t&1&&(m(0,"sz-ui-header-info",0),p(1,"mat-tab-group",1)(2,"mat-tab",2),A(3,Ue,1,0),b(4,3,ze),v(),l(),p(6,"mat-tab",3),A(7,$e,1,0),b(8,7,Pe),v(),l(),p(10,"mat-tab",4),A(11,Be,1,0),b(12,11,Ye),v(),l()()),t&2&&s("title",o.testType.name)("subtitle",o.testType.description);},dependencies:[fe,Ee,q],encapsulation:2});let r=i;return r;})();var Ne=[{path:"",component:ge},{path:"specimen-types",loadComponent:()=>import("./chunk-TLQC62RU.js").then(r=>r.TestTypeSpecimenTypesComponent)}];var ti=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=_e({type:i}),i.ɵinj=me({providers:[d],imports:[M.forChild(Ne),y,Se,C,Me,q,N,ce,re,pe,se]});let r=i;return r;})();export{ti as TestTypeModule};/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/