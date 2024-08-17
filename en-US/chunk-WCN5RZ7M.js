import{c as re}from"./chunk-WNZGAC5B.js";import{a as l}from"./chunk-GFRVKPAG.js";import{a as m,d as Z,e as ee,f as te,i as oe,j as ie}from"./chunk-7FOO2BSN.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{b as H,f as Q,g as J,h as K,j as W,k as Y}from"./chunk-BQ3MI4NW.js";import{b as h,e as x}from"./chunk-JPFRJQ7V.js";import{g}from"./chunk-E6NASU4P.js";import{a as V,b as y,d as B,e as $,g as M}from"./chunk-WNUUIGGE.js";import{c as X,r as k,s as w,t as q}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as j}from"./chunk-JACASQJP.js";import{d as _,f as I,g as O,l as D,n as b,q as A,r as P,u as F}from"./chunk-VXNH5PTX.js";import{Y as T}from"./chunk-KQ5MQZXD.js";import{e as G}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as L,la as U}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as d,Lb as u,Mb as S,Xb as E,bb as p,cb as a,ea as N,na as c,oa as R,oc as f,pc as z,qb as v,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var C=function(r){return r.Thermal="Thermal",r.Inkjet="Inkjet",r;}(C||{});var ae=(()=>{let t=class t extends Q{constructor(o,e,i,n){super(i),this.srptService=o,this.fb=e,this.dialog=i,this.data=n,this.printMethods=Object.keys(C).map(me=>C[me]),this.form=e.group({name:[n?.name,[_.required]],description:[n?.description,[_.maxLength(4096)]],printMethod:[n?.printMethod,[_.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(l),a(P),a(V),a(y));},t.ɵcmp=c({type:t,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),v,z],decls:7,vars:7,consts:()=>{let o;o="Name";let e;e="Description";let i;return i="Method",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","printMethod","label",i,3,"source","localizedValue"],[3,"actions"]];},template:function(e,i){e&1&&(S(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),u()(),S(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),s("formGroup",i.form),p(3),s("source",i.printMethods)("localizedValue",!0),p(),s("actions",i.actions));},dependencies:[F,D,I,O,b,A,M,$,j,re,Y,J,K,q,X,w,k],encapsulation:2});let r=t;return r;})();var se=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.srptService=e,this.dataSource=new Z(),this.appBarConfig={title:T.printers,actions:[h.add(this.openSaveComponent.bind(this)),h.menu([h.search()])]},this.dataSource.columnDefs.push(m.uuid("id"),m.string("name").setValueClassFontBold().setStacked(m.string("description").setValueClassFontSmall()),m.enum("printMethod").setName(T.method),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([g.edit(this.openSaveComponent.bind(this)),g.divider(),g.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(ae,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(W,{data:H.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(B),a(l));},t.ɵcmp=c({type:t,selectors:[["sz-mgmt-reporting-printers"]],features:[f([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,i){e&1&&(d(0,"sz-ui-table-bar",0),E("changed",function(){return i.get();}),u(),d(1,"sz-ui-table",1),E("update",function(){return i.get();}),u()),e&2&&(s("config",i.appBarConfig)("dataSource",i.dataSource),p(),s("dataSource",i.dataSource));},dependencies:[oe,te],encapsulation:2});let r=t;return r;})();var We=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=R({type:t}),t.ɵinj=N({providers:[l],imports:[G.forChild([{path:"",component:se}]),M,U,ie,x,L]});let r=t;return r;})();export{We as PrintersModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/