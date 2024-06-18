import{c as ae}from"./chunk-DEDCJZVG.js";import{a as u}from"./chunk-JYUFJ57T.js";import{a as p,b as te,d as oe,f as ie,i as re,j as ne}from"./chunk-OD34M2WV.js";import"./chunk-UE5ZVLL6.js";import"./chunk-XHAJJGHN.js";import"./chunk-J3ZGTMT7.js";import{e as J,f as K,g as W,i as Y,j as Z,k as ee}from"./chunk-XU4OIEX3.js";import"./chunk-5XS2JNPH.js";import{a as T}from"./chunk-5EXH6KQ6.js";import{h as N}from"./chunk-VJQIJJGN.js";import{a as V,b as $,d as B,e as j,g}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as w,j as q,v as H,x as Q,y as x}from"./chunk-DTFZJJ2Y.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import"./chunk-O4THXITG.js";import{j as U}from"./chunk-4MKCL2OB.js";import{d as M,f as z,g as P,k as D,m as A,p as b,q as G,t as F}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{e as L}from"./chunk-HMSPALCE.js";import"./chunk-HR5OOZ7A.js";import{a as C}from"./chunk-6GZKHOTA.js";import{ha as y,ia as X,ka as k}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as l,Jb as S,Kb as d,Ub as O,Vb as _,ab as m,bb as s,ea as R,kc as f,lc as v,na as c,oa as h,ob as I,yb as a}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var E=function(r){return r.Thermal="Thermal",r.Inkjet="Inkjet",r;}(E||{});var me=(()=>{let i=class i extends J{constructor(o,e,t,n){super(t),this.srptService=o,this.fb=e,this.dialog=t,this.data=n,this.printMethods=Object.keys(E).map(pe=>E[pe]),this.form=e.group({name:[n?.name,[M.required]],description:[n?.description,[M.maxLength(4096)]],printMethod:[n?.printMethod,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(u),s(G),s(V),s($));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),I,v],decls:7,vars:7,consts:()=>{let o;o="Name";let e;e="Description";let t;return t="Method",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","printMethod","label",t,3,"source","localizedValue"],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),a("formGroup",t.form),m(3),a("source",t.printMethods)("localizedValue",!0),m(),a("actions",t.actions));},dependencies:[F,D,z,P,A,b,g,j,U,ae,Z,K,W,x,w,Q,H],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i{constructor(o,e){this.dialog=o,this.srptService=e,this.title=C.printers,this.dataSource=new oe(),this.dataSource.columnDefs.push(p.uuid("id"),p.string("name").setValueClassFontBold().setStacked(p.string("description").setValueClassFontSmall()),p.enum("printMethod").setName(C.method),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),te.menu([N.edit(t=>this.openSaveComponent(t)),N.delete(t=>this.openReportDeleteComponent(t))])),this.get();}openSaveComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(Y,{data:ee.delete(this.srptService.reports.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)(s(B),s(u));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-printers"]],features:[f([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(d(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),_("changed",function(){return t.get();}),l(2,"button",3),_("click",function(){return t.openSaveComponent();}),l(3,"span"),O(4,0),S()()(),l(5,"sz-ui-table",4),_("update",function(){return t.get();}),S()),e&2&&(a("title",t.title),m(),a("dataSource",t.dataSource),m(4),a("dataSource",t.dataSource));},dependencies:[X,re,ie,T],encapsulation:2});let r=i;return r;})();var et=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[u],imports:[L.forChild([{path:"",component:le}]),g,k,ne,T,y]});let r=i;return r;})();export{et as PrintersModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/