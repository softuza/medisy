import{a as Oe,b as ye,c as Ce}from"./chunk-HPEWCZZS.js";import{a as ae}from"./chunk-6OMCQAVW.js";import{a as Me}from"./chunk-QSM7WKJW.js";import"./chunk-Z3ELZRWE.js";import{a as d,b as ie,d as oe,f as re,i as ne,j as se}from"./chunk-7YC3FKFX.js";import"./chunk-U2NYA4TJ.js";import"./chunk-UKNNB4C6.js";import"./chunk-UBJFLYRY.js";import{a as S}from"./chunk-D4CAUMAG.js";import{e as K,f as W,g as Z,i as ee,j as I,k as te}from"./chunk-GOPVSNKC.js";import"./chunk-M3NA2DMH.js";import{a as J}from"./chunk-6MMOYJEJ.js";import{h as g}from"./chunk-QT6JCYGS.js";import{a as k,b as w,d as O,e as x,g as y}from"./chunk-R72CS7SP.js";import"./chunk-2NAL3ARI.js";import{c as fe,o as Q,q as Ee}from"./chunk-UCRC6V5J.js";import{c as H}from"./chunk-5WJVC7PV.js";import"./chunk-P4AS2ZYY.js";import"./chunk-EY4PTUQV.js";import"./chunk-QXIIYWNN.js";import"./chunk-YWYJPJA4.js";import{d as R,f as U,g as $,k as F,m as V,p as G,q as j,t as X}from"./chunk-EIWC7QFZ.js";import"./chunk-22G3BWVW.js";import{a as E,c as ue,e as M}from"./chunk-L6HNREY7.js";import"./chunk-6YPHC773.js";import{ha as ce,ia as q,ka as C}from"./chunk-QHXZELMZ.js";import"./chunk-TWGSABWX.js";import{Ab as P,Bb as z,Db as a,Ma as L,Nb as p,Ob as l,Pb as m,Zb as Y,_b as u,ac as B,hb as _,ib as s,ka as Se,pc as f,qc as c,ta as A,ua as T,ub as v,va as Te,zb as D}from"./chunk-XPH4NMLC.js";var ge=(()=>{let i=class i extends K{constructor(e,t,o,n){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=n,this.form=t.group({name:[n.testTypeResultOption?.name,[R.required]],description:[n.testTypeResultOption?.description,[]],abbreviation:[n.testTypeResultOption?.abbreviation,[]],localizedName:[n.testTypeResultOption?.localizedName,[]],value:[n.testTypeResultOption?.value,[R.required]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(S),s(j),s(k),s(w));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[f([]),v,c],decls:9,vars:6,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let o;o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u0631\u062C\u0645";let n;n="\u0623\u062E\u062A\u0635\u0627\u0631";let _e;return _e="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","localizedName","label",o],["formControlName","abbreviation","label",n],["formControlName","value","label",_e,3,"type"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-input",6),l()(),m(8,"sz-ui-dialog-actions",7)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),a("formGroup",o.form),_(5),a("type","number"),_(),a("actions",o.actions));},dependencies:[X,F,U,$,V,G,y,x,Q,I,W,Z,fe],encapsulation:2});let r=i;return r;})();var me=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new oe(),this.testTypeId=L.required(),this.dataSource.columnDefs.push(d.uuid("id"),d.string("name").setStacked(d.string("localizedName").setValueClassFontSmall()),d.string("abbreviation"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ie.menu([g.edit(n=>this.openSaveComponent(n)),g.delete(n=>this.openTestTypeResultOptionDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(ge,{data:{testTypeId:this.testTypeId(),testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(ee,{data:te.delete(this.mlabService.testTypes.resultOptions.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testTypeId(),this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(O),s(S),s(E));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],inputs:{testTypeId:[A.SignalBased,"testTypeId"]},standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),p(1,"button",2),u("click",function(){return o.openSaveComponent();}),p(2,"span"),Y(3,0),l()()(),p(4,"sz-ui-table",3),u("update",function(){return o.get();}),l()),t&2&&(a("dataSource",o.dataSource),_(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,q,se,ne,re],encapsulation:2});let r=i;return r;})();var Ne=(()=>{let i=class i extends K{constructor(e,t,o,n){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=n,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=t.group({unitId:[n.testTypeUnit?.unitId,[R.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(S),s(j),s(k),s(w));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[f([]),v,c],decls:5,vars:6,consts:()=>{let e;return e="\u0648\u0627\u062D\u062F\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",e,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),l()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),a("formGroup",o.form),_(),a("source",o.units),_(),a("actions",o.actions));},dependencies:[X,F,U,$,V,G,y,x,Q,I,W,Z,Ee],encapsulation:2});let r=i;return r;})();var de=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new oe(),this.testTypeId=L.required(),this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("unitId"),d.string("unit.name"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ie.menu([g.edit(n=>this.openSaveComponent(n)),g.delete(n=>this.openTestTypeUnitDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Ne,{data:{testTypeId:this.testTypeId(),testTypeUnit:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeUnitDeleteComponent(e){this.dialog.open(ee,{data:te.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.units.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.units.get(this.testTypeId(),this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(O),s(S),s(E));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],inputs:{testTypeId:[A.SignalBased,"testTypeId"]},standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),p(1,"button",2),u("click",function(){return o.openSaveComponent();}),p(2,"span"),Y(3,0),l()()(),p(4,"sz-ui-table",3),u("update",function(){return o.get();}),l()),t&2&&(a("dataSource",o.dataSource),_(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,q,se,ne,re],encapsulation:2});let r=i;return r;})();var Be=()=>[ae],Ue=()=>[de],$e=()=>[me];function Fe(r,i){if(r&1&&m(0,"sz-medisy-laboratory-test-type-specimen-types",5),r&2){let N=B();a("testTypeId",N.testType.id);}}function Ve(r,i){if(r&1&&m(0,"sz-medisy-laboratory-test-type-units",5),r&2){let N=B();a("testTypeId",N.testType.id);}}function Ge(r,i){if(r&1&&m(0,"sz-medisy-laboratory-test-type-result-options",5),r&2){let N=B();a("testTypeId",N.testType.id);}}var Re=(()=>{let i=class i{constructor(e,t,o,n){this.dialog=e,this.mlabService=t,this.route=o,this.router=n,this.testType=this.route.snapshot.data.testType;}};i.ɵfac=function(t){return new(t||i)(s(O),s(S),s(E),s(ue));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[f([])],decls:14,vars:3,consts:()=>{let e;e="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A";let t;t="\u0627\u0644\u0648\u062D\u062F\u0627\u062A";let o;return o="\u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A",[[3,"title","subtitle","backEnabled"],["mat-stretch-tabs","false"],["label",e],["label",t],["label",o],[3,"testTypeId"]];},template:function(t,o){t&1&&(m(0,"sz-ui-app-bar",0),p(1,"mat-tab-group",1)(2,"mat-tab",2),D(3,Fe,1,1),P(4,3,Be),z(),l(),p(6,"mat-tab",3),D(7,Ve,1,1),P(8,7,Ue),z(),l(),p(10,"mat-tab",4),D(11,Ge,1,1),P(12,11,$e),z(),l()()),t&2&&a("title",o.testType.name)("subtitle",o.testType.description)("backEnabled",!0);},dependencies:[Oe,ye,J],encapsulation:2});let r=i;return r;})();var be=[{path:"",component:Re},{path:"specimen-types",loadComponent:()=>import("./chunk-GBMSC3S5.js").then(r=>r.TestTypeSpecimenTypesComponent)}];var si=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=Te({type:i}),i.ɵinj=Se({providers:[S],imports:[M.forChild(be),y,ce,C,Ce,J,I,Me,ae,de,me]});let r=i;return r;})();export{si as TestTypeModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/