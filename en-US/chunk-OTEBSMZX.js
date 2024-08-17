import{c as ie}from"./chunk-WNZGAC5B.js";import{a as d}from"./chunk-GFRVKPAG.js";import{a as m,d as Y,e as Z,f as ee,i as te,j as oe}from"./chunk-ZWBEQEWG.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{b as x,f as H,g as Q,h as J,j as K,k as W}from"./chunk-BQ3MI4NW.js";import{d as q}from"./chunk-DPEAMXJP.js";import{h as p}from"./chunk-2C5UG3LV.js";import{a as L,b as V,d as y,e as B,g}from"./chunk-WNUUIGGE.js";import{c as U,r as X,s as k,t as w}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as $}from"./chunk-JACASQJP.js";import{d as M,f as z,g as I,l as O,n as D,q as b,r as P,u as A}from"./chunk-VXNH5PTX.js";import{Y as E}from"./chunk-KQ5MQZXD.js";import{e as F}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as G,la as j}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as u,Lb as c,Mb as f,Xb as C,bb as l,cb as a,ea as T,na as S,oa as N,oc as _,pc as v,qb as R,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var h=function(r){return r.Thermal="Thermal",r.Inkjet="Inkjet",r;}(h||{});var ne=(()=>{let t=class t extends H{constructor(o,e,i,n){super(i),this.srptService=o,this.fb=e,this.dialog=i,this.data=n,this.printMethods=Object.keys(h).map(se=>h[se]),this.form=e.group({name:[n?.name,[M.required]],description:[n?.description,[M.maxLength(4096)]],printMethod:[n?.printMethod,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(d),a(P),a(L),a(V));},t.ɵcmp=S({type:t,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[_([]),R,v],decls:7,vars:7,consts:()=>{let o;o="Name";let e;e="Description";let i;return i="Method",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","printMethod","label",i,3,"source","localizedValue"],[3,"actions"]];},template:function(e,i){e&1&&(f(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),c()(),f(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),s("formGroup",i.form),l(3),s("source",i.printMethods)("localizedValue",!0),l(),s("actions",i.actions));},dependencies:[A,O,z,I,D,b,g,B,$,ie,W,Q,J,w,U,k,X],encapsulation:2});let r=t;return r;})();var ae=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.srptService=e,this.dataSource=new Y(),this.appBarConfig={title:E.printers,actions:[p.add(this.openSaveComponent.bind(this)),p.menu([p.search()])]},this.dataSource.columnDefs.push(m.uuid("id"),m.string("name").setValueClassFontBold().setStacked(m.string("description").setValueClassFontSmall()),m.enum("printMethod").setName(E.method),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([p.edit(this.openSaveComponent.bind(this)),p.divider(),p.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(ne,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(K,{data:x.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(y),a(d));},t.ɵcmp=S({type:t,selectors:[["sz-mgmt-reporting-printers"]],features:[_([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,i){e&1&&(u(0,"sz-ui-table-bar",0),C("changed",function(){return i.get();}),c(),u(1,"sz-ui-table",1),C("update",function(){return i.get();}),c()),e&2&&(s("config",i.appBarConfig)("dataSource",i.dataSource),l(),s("dataSource",i.dataSource));},dependencies:[te,ee],encapsulation:2});let r=t;return r;})();var Je=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=N({type:t}),t.ɵinj=T({providers:[d],imports:[F.forChild([{path:"",component:ae}]),g,j,oe,q,G]});let r=t;return r;})();export{Je as PrintersModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/