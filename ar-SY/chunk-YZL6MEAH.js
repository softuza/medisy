import{a as ye,b as Ce,c as Ie}from"./chunk-FU7H7IQB.js";import{a as pe}from"./chunk-DHAHCAIC.js";import{a as Oe}from"./chunk-H2RM5A4J.js";import"./chunk-EKSQVKSV.js";import{a as d,b as oe,d as re,f as ne,i as se,j as ae}from"./chunk-BRAPFLKV.js";import"./chunk-IDRLCJEK.js";import"./chunk-6G3NMOEL.js";import"./chunk-RZHQ5QL7.js";import{a as S}from"./chunk-SVTFNF7U.js";import{e as W,f as Z,g as ee,i as te,j as g,k as ie}from"./chunk-WN2NFEA2.js";import"./chunk-6FUK3GWV.js";import{b as K}from"./chunk-XCAJ3ZHI.js";import{h as I}from"./chunk-Q5LDCOCY.js";import{a as k,b as w,d as O,e as x,g as y}from"./chunk-IAMBMKDI.js";import"./chunk-LGJQHWSD.js";import{c as Ee,o as J,q as Me}from"./chunk-ZA2UB2XH.js";import{c as q}from"./chunk-KVZ22XWW.js";import"./chunk-PZABDFIU.js";import"./chunk-K44WW3SG.js";import{c as Q}from"./chunk-LMCANXRL.js";import"./chunk-AIP5TNUP.js";import{d as R,f as B,g as $,k as F,m as V,p as G,q as j,t as X}from"./chunk-KAOE4CKM.js";import"./chunk-3K5ERU5F.js";import{a as E,c as ce,e as M}from"./chunk-4YTU7KIA.js";import"./chunk-5S3D3WJX.js";import{ha as fe,ia as H,ka as C}from"./chunk-WG6MZMNK.js";import"./chunk-6DPHD5PI.js";import{Ab as z,Bb as P,Db as a,Ma as A,Nb as p,Ob as l,Pb as m,Zb as Y,_b as u,ac as U,hb as _,ib as s,ka as Te,pc as f,qc as c,ta as L,ua as T,ub as v,va as ue,zb as D}from"./chunk-WLX3OMWV.js";var ge=(()=>{let i=class i extends W{constructor(e,t,o,n){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=n,this.form=t.group({name:[n.testTypeResultOption?.name,[R.required]],description:[n.testTypeResultOption?.description,[]],abbreviation:[n.testTypeResultOption?.abbreviation,[]],localizedName:[n.testTypeResultOption?.localizedName,[]],value:[n.testTypeResultOption?.value,[R.required]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(S),s(j),s(k),s(w));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[f([]),v,c],decls:9,vars:6,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let o;o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u0631\u062C\u0645";let n;n="\u0623\u062E\u062A\u0635\u0627\u0631";let Se;return Se="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","localizedName","label",o],["formControlName","abbreviation","label",n],["formControlName","value","label",Se,3,"type"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-input",6),l()(),m(8,"sz-ui-dialog-actions",7)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),a("formGroup",o.form),_(5),a("type","number"),_(),a("actions",o.actions));},dependencies:[X,F,B,$,V,G,y,x,J,g,Z,ee,Ee],encapsulation:2});let r=i;return r;})();var de=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=Q.units,this.dataSource=new re(),this.testTypeId=A.required(),this.dataSource.columnDefs.push(d.uuid("id"),d.string("name").setStacked(d.string("localizedName").setValueClassFontSmall()),d.string("abbreviation"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),oe.menu([I.edit(n=>this.openSaveComponent(n)),I.delete(n=>this.openTestTypeResultOptionDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(ge,{data:{testTypeId:this.testTypeId(),testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(te,{data:ie.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testTypeId(),this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(O),s(S),s(E));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],inputs:{testTypeId:[L.SignalBased,"testTypeId"]},standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),p(1,"button",2),u("click",function(){return o.openSaveComponent();}),p(2,"span"),Y(3,0),l()()(),p(4,"sz-ui-table",3),u("update",function(){return o.get();}),l()),t&2&&(a("dataSource",o.dataSource),_(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,H,ae,se,ne],encapsulation:2});let r=i;return r;})();var Re=(()=>{let i=class i extends W{constructor(e,t,o,n){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=n,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=t.group({unitId:[n.testTypeUnit?.unitId,[R.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(S),s(j),s(k),s(w));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[f([]),v,c],decls:5,vars:6,consts:()=>{let e;return e="\u0648\u0627\u062D\u062F\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",e,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),l()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),a("formGroup",o.form),_(),a("source",o.units),_(),a("actions",o.actions));},dependencies:[X,F,B,$,V,G,y,x,J,g,Z,ee,Me],encapsulation:2});let r=i;return r;})();var _e=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=Q.units,this.dataSource=new re(),this.testTypeId=A.required(),this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("unitId"),d.string("unit.name"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),oe.menu([I.edit(n=>this.openSaveComponent(n)),I.delete(n=>this.openTestTypeUnitDeleteComponent(n))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Re,{data:{testTypeId:this.testTypeId(),testTypeUnit:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeUnitDeleteComponent(e){this.dialog.open(te,{data:ie.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.units.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.units.get(this.testTypeId(),this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(O),s(S),s(E));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],inputs:{testTypeId:[L.SignalBased,"testTypeId"]},standalone:!0,features:[c],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),p(1,"button",2),u("click",function(){return o.openSaveComponent();}),p(2,"span"),Y(3,0),l()()(),p(4,"sz-ui-table",3),u("update",function(){return o.get();}),l()),t&2&&(a("dataSource",o.dataSource),_(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[M,C,H,ae,se,ne],encapsulation:2});let r=i;return r;})();var Be=()=>[pe],$e=()=>[_e],Fe=()=>[de];function Ve(r,i){if(r&1&&m(0,"sz-medisy-laboratory-test-type-specimen-types",5),r&2){let N=U();a("testTypeId",N.testType.id);}}function Ge(r,i){if(r&1&&m(0,"sz-medisy-laboratory-test-type-units",5),r&2){let N=U();a("testTypeId",N.testType.id);}}function je(r,i){if(r&1&&m(0,"sz-medisy-laboratory-test-type-result-options",5),r&2){let N=U();a("testTypeId",N.testType.id);}}var be=(()=>{let i=class i{constructor(e,t,o,n){this.dialog=e,this.mlabService=t,this.route=o,this.router=n,this.testType=this.route.snapshot.data.testType;}};i.ɵfac=function(t){return new(t||i)(s(O),s(S),s(E),s(ce));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[f([])],decls:14,vars:2,consts:()=>{let e;e="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A";let t;t="\u0627\u0644\u0648\u062D\u062F\u0627\u062A";let o;return o="\u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A",[[3,"title","subtitle"],["mat-stretch-tabs","false"],["label",e],["label",t],["label",o],[3,"testTypeId"]];},template:function(t,o){t&1&&(m(0,"sz-ui-header-info",0),p(1,"mat-tab-group",1)(2,"mat-tab",2),D(3,Ve,1,1),z(4,3,Be),P(),l(),p(6,"mat-tab",3),D(7,Ge,1,1),z(8,7,$e),P(),l(),p(10,"mat-tab",4),D(11,je,1,1),z(12,11,Fe),P(),l()()),t&2&&a("title",o.testType.name)("subtitle",o.testType.description);},dependencies:[ye,Ce,K],encapsulation:2});let r=i;return r;})();var he=[{path:"",component:be},{path:"specimen-types",loadComponent:()=>import("./chunk-S2ECJJDB.js").then(r=>r.TestTypeSpecimenTypesComponent)}];var li=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=ue({type:i}),i.ɵinj=Te({providers:[S],imports:[M.forChild(he),y,fe,C,Ie,K,g,Oe,pe,_e,de]});let r=i;return r;})();export{li as TestTypeModule};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/