import{a as l}from"./chunk-MOUVONG3.js";import{a as n,d as W,e as Y,f as ee,i as te,j as oe}from"./chunk-ZWBEQEWG.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{b as q,f as Q,g as x,h as J,j as K,k as g}from"./chunk-BQ3MI4NW.js";import{d as k}from"./chunk-DPEAMXJP.js";import{h as s}from"./chunk-2C5UG3LV.js";import{a as P,b as $,d as U,e as G,g as N}from"./chunk-WNUUIGGE.js";import{c as j,q as X,s as w,t as H}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-JACASQJP.js";import{d as h,f as b,g as D,l as I,n as R,q as A,r as L,u as F}from"./chunk-VXNH5PTX.js";import{Y as O}from"./chunk-KQ5MQZXD.js";import{c as y,e as V}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as B,la as Z}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as p,Lb as u,Mb as _,Xb as M,bb as d,cb as f,ea as T,ja as m,na as S,oa as E,oc as C,pc as v,qb as z,zb as a}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var re=(()=>{let t=class t extends Q{constructor(e,o,i){super(o),this.fb=e,this.dialog=o,this.data=i,this.cstnService=m(l),this.form=e.group({name:[i?.name,[h.required,h.minLength(1)]],description:[i?.description,[]],code:[i?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)(f(L),f(P),f($));},t.ɵcmp=S({type:t,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[C([]),z,v],decls:7,vars:5,consts:()=>{let e;e="Name";let o;o="Description";let i;return i="Code",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],["formControlName","code","label",i],[3,"actions"]];},template:function(o,i){o&1&&(_(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),u()(),_(6,"sz-ui-dialog-actions",5)),o&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),a("formGroup",i.form),d(4),a("actions",i.actions));},dependencies:[F,I,b,D,R,A,N,G,X,g,x,J,H,j,w],encapsulation:2});let r=t;return r;})();var ne=(()=>{let t=class t{constructor(){this.cstnService=m(l),this.dialog=m(U),this.router=m(y),this.dataSource=new W("name"),this.appBarConfig={title:O.zones,actions:[s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])]},this.dataSource.columnDefs.push(n.uuid("id"),n.hyperlink("name",e=>e.id).setHeaderSortable(!0),n.string("code"),n.number("teamsCount").setValueGetter(e=>e.teams?.length).setName(O.teams).setHeaderSortable(!1),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openZoneDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(re,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openZoneDeleteComponent(e){this.dialog.open(K,{data:q.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(Y(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=S({type:t,selectors:[["sz-constr-construction-zones"]],features:[C([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,i){o&1&&(p(0,"sz-ui-table-bar",0),M("changed",function(){return i.get();}),u(),p(1,"sz-ui-table",1),M("update",function(){return i.get();}),u()),o&2&&(a("config",i.appBarConfig)("dataSource",i.dataSource),d(),a("dataSource",i.dataSource));},dependencies:[te,ee],encapsulation:2});let r=t;return r;})();var xe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=E({type:t}),t.ɵinj=T({providers:[l],imports:[V.forChild([{path:"",component:ne}]),N,B,Z,oe,g,k]});let r=t;return r;})();export{xe as ZonesModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/