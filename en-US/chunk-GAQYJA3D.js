import{a as p}from"./chunk-OM2CZFHP.js";import{a as S,b as ee,d as te,e as oe,g as ie,j as re,k as ne}from"./chunk-UFZOVEXN.js";import"./chunk-KG52U4YG.js";import"./chunk-BVIAW6LA.js";import"./chunk-WB6GSLJI.js";import{e as J,f as K,g as W,i as Y,j as g,k as x}from"./chunk-ATQTF7V2.js";import{a as O}from"./chunk-XTD4P5RM.js";import{h as T}from"./chunk-SE7A63UJ.js";import{a as U,b as V,d as Z,e as G,g as N}from"./chunk-KXHITGXF.js";import{e as k,t as H,w as q,x as Q}from"./chunk-OTWXCUGL.js";import"./chunk-NUTQJXHI.js";import"./chunk-BVTPLI23.js";import{c as w}from"./chunk-MJ3OXUGM.js";import"./chunk-EFKI6RZJ.js";import{d as M,f as D,g as I,l as A,n as b,q as L,r as y,u as F}from"./chunk-4JGOPH4G.js";import"./chunk-UFIT6BFN.js";import{c as $,e as B}from"./chunk-MRA43Y7M.js";import"./chunk-47AE3CN4.js";import{ia as P,ja as j,la as X}from"./chunk-6PMHIRG3.js";import"./chunk-73YOCJBM.js";import{Jb as a,Kb as c,Lb as l,Vb as v,Wb as f,bb as m,cb as _,ea as E,ja as s,na as u,nc as C,oa as h,oc as R,qb as z,zb as n}from"./chunk-S5HBEIU3.js";import"./chunk-K67PUIM2.js";var se=(()=>{let o=class o extends J{constructor(e,t,i){super(t),this.fb=e,this.dialog=t,this.data=i,this.cstnService=s(p),this.form=e.group({name:[i?.name,[M.required,M.minLength(1)]],description:[i?.description,[]],code:[i?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(_(y),_(U),_(V));},o.ɵcmp=u({type:o,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[C([]),z,R],decls:7,vars:5,consts:()=>{let e;e="Name";let t;t="Description";let i;return i="Code",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","code","label",i],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),c()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),m(2),n("formGroup",i.form),m(4),n("actions",i.actions));},dependencies:[F,A,D,I,b,L,N,G,H,g,K,W,Q,k,q],encapsulation:2});let r=o;return r;})();var me=(()=>{let o=class o{constructor(){this.cstnService=s(p),this.dialog=s(Z),this.router=s($),this.dataSource=new te("name"),this.appBarConfig={title:w.zones},this.dataSource.columnDefs.push(S.uuid("id"),S.hyperlink("name",e=>e.id).setHeaderSortable(!0),S.string("code"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),ee.menu([T.edit(e=>this.openSaveComponent(e)),T.delete(e=>this.openZoneDeleteComponent(e))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openZoneDeleteComponent(e){this.dialog.open(Y,{data:x.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=u({type:o,selectors:[["sz-constr-construction-zones"]],features:[C([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,i){t&1&&(l(0,"sz-ui-app-bar",1),a(1,"sz-ui-table-search-filter",2),f("changed",function(){return i.get();}),a(2,"button",3),f("click",function(){return i.openSaveComponent();}),a(3,"span"),v(4,0),c()()(),a(5,"sz-ui-table",4),f("update",function(){return i.get();}),c()),t&2&&(n("config",i.appBarConfig),m(),n("dataSource",i.dataSource),m(4),n("dataSource",i.dataSource));},dependencies:[j,re,ie,O],encapsulation:2});let r=o;return r;})();var et=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=h({type:o}),o.ɵinj=E({providers:[p],imports:[B.forChild([{path:"",component:me}]),N,P,X,ne,g,O]});let r=o;return r;})();export{et as ZonesModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/