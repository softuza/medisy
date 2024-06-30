import{a as u}from"./chunk-KVTJ7ZB5.js";import{c as ae}from"./chunk-JAXP7B77.js";import{a as p,b as te,d as oe,f as ie,i as re,j as ne}from"./chunk-3RGN74YT.js";import"./chunk-4PUI7TFD.js";import"./chunk-UX7LCM42.js";import"./chunk-6QTNW6V3.js";import"./chunk-BDVQ6LF3.js";import{e as J,f as K,g as W,i as Y,j as Z,k as ee}from"./chunk-45EQYRXL.js";import{a as T}from"./chunk-J7RSE5GX.js";import{h as N}from"./chunk-S4HAMF5I.js";import{a as V,b as $,d as B,e as j,g}from"./chunk-PI57QVX3.js";import"./chunk-AYSVPPXZ.js";import{e as w,j as q,v as H,x as Q,y as x}from"./chunk-NGCO2DG7.js";import"./chunk-BQGY2E4W.js";import"./chunk-JB2SFW5Z.js";import{c as C}from"./chunk-FAEIW35E.js";import{j as U}from"./chunk-WDKUGUU7.js";import{d as M,f as z,g as P,k as D,m as A,p as b,q as G,t as F}from"./chunk-CXB763V2.js";import"./chunk-LUIABQW7.js";import{e as L}from"./chunk-AWG7Q7IV.js";import"./chunk-O6OUP7WU.js";import{ha as y,ia as X,ka as k}from"./chunk-SHXYMDXZ.js";import"./chunk-BSUEWO5U.js";import{$b as _,Eb as a,Ob as l,Pb as S,Qb as d,_b as O,gb as m,hb as s,ka as R,qc as f,rc as v,ta as c,ua as h,ub as I}from"./chunk-PSKSSTJ7.js";var E=function(r){return r.Thermal="Thermal",r.Inkjet="Inkjet",r;}(E||{});var me=(()=>{let i=class i extends J{constructor(o,e,t,n){super(t),this.srptService=o,this.fb=e,this.dialog=t,this.data=n,this.printMethods=Object.keys(E).map(pe=>E[pe]),this.form=e.group({name:[n?.name,[M.required]],description:[n?.description,[M.maxLength(4096)]],printMethod:[n?.printMethod,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(u),s(G),s(V),s($));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),I,v],decls:7,vars:7,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let t;return t="\u0627\u0644\u0645\u0646\u0647\u062C\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","printMethod","label",t,3,"source","localizedValue"],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),a("formGroup",t.form),m(3),a("source",t.printMethods)("localizedValue",!0),m(),a("actions",t.actions));},dependencies:[F,D,z,P,A,b,g,j,U,ae,Z,K,W,x,w,Q,H],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i{constructor(o,e){this.dialog=o,this.srptService=e,this.title=C.printers,this.dataSource=new oe(),this.dataSource.columnDefs.push(p.uuid("id"),p.string("name").setValueClassFontBold().setStacked(p.string("description").setValueClassFontSmall()),p.enum("printMethod").setName(C.method),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),te.menu([N.edit(t=>this.openSaveComponent(t)),N.delete(t=>this.openReportDeleteComponent(t))])),this.get();}openSaveComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(Y,{data:ee.delete(this.srptService.reports.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)(s(B),s(u));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-printers"]],features:[f([])],decls:6,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(d(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),_("changed",function(){return t.get();}),l(2,"button",3),_("click",function(){return t.openSaveComponent();}),l(3,"span"),O(4,0),S()()(),l(5,"sz-ui-table",4),_("update",function(){return t.get();}),S()),e&2&&(a("title",t.title),m(),a("dataSource",t.dataSource),m(4),a("dataSource",t.dataSource));},dependencies:[X,re,ie,T],encapsulation:2});let r=i;return r;})();var et=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[u],imports:[L.forChild([{path:"",component:le}]),g,k,ne,T,y]});let r=i;return r;})();export{et as PrintersModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/