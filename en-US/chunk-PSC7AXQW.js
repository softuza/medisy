import{a as S}from"./chunk-JYX4FAMI.js";import{a as s,b as ee,d as te,e as oe,g as ie,j as re,k as ne}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import"./chunk-UYYWHWBI.js";import{e as J,f as K,g as W,i as Y,j as g,k as x}from"./chunk-5NWVIDQT.js";import{a as O}from"./chunk-NXQ5VREG.js";import{h as E}from"./chunk-HWSLRHWT.js";import{a as U,b as G,d as Z,e as j,g as N}from"./chunk-Z2LVGH3F.js";import{c as w,r as H,u as q,v as Q}from"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as T}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import{d as M,f as I,g as b,l as A,n as L,q as y,r as F,u as $}from"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{c as B,e as V}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ia as P,ja as X,la as k}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as a,Kb as c,Lb as p,Vb as R,Wb as f,bb as l,cb as _,ea as h,ja as m,na as u,nc as C,oa as z,oc as D,qb as v,zb as n}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var se=(()=>{let o=class o extends J{constructor(e,t,i){super(t),this.fb=e,this.dialog=t,this.data=i,this.cstnService=m(S),this.form=e.group({name:[i?.name,[M.required,M.minLength(1)]],description:[i?.description,[]],code:[i?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(_(F),_(U),_(G));},o.ɵcmp=u({type:o,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[C([]),v,D],decls:7,vars:5,consts:()=>{let e;e="Name";let t;t="Description";let i;return i="Code",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","code","label",i],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),c()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),n("formGroup",i.form),l(4),n("actions",i.actions));},dependencies:[$,A,I,b,L,y,N,j,H,g,K,W,Q,w,q],encapsulation:2});let r=o;return r;})();var me=(()=>{let o=class o{constructor(){this.cstnService=m(S),this.dialog=m(Z),this.router=m(B),this.dataSource=new te("name"),this.appBarConfig={title:T.zones},this.dataSource.columnDefs.push(s.uuid("id"),s.hyperlink("name",e=>e.id).setHeaderSortable(!0),s.string("code"),s.number("teamsCount").setValueGetter(e=>e.teams?.length).setName(T.teams).setHeaderSortable(!1),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),ee.menu([E.edit(e=>this.openSaveComponent(e)),E.delete(e=>this.openZoneDeleteComponent(e))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openZoneDeleteComponent(e){this.dialog.open(Y,{data:x.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=u({type:o,selectors:[["sz-constr-construction-zones"]],features:[C([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",1),a(1,"sz-ui-table-search-filter",2),f("changed",function(){return i.get();}),a(2,"button",3),f("click",function(){return i.openSaveComponent();}),a(3,"span"),R(4,0),c()()(),a(5,"sz-ui-table",4),f("update",function(){return i.get();}),c()),t&2&&(n("config",i.appBarConfig),l(),n("dataSource",i.dataSource),l(4),n("dataSource",i.dataSource));},dependencies:[X,re,ie,O],encapsulation:2});let r=o;return r;})();var et=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=z({type:o}),o.ɵinj=h({providers:[S],imports:[V.forChild([{path:"",component:me}]),N,P,k,ne,g,O]});let r=o;return r;})();export{et as ZonesModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/