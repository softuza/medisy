import{c as K}from"./chunk-XVBWHRHB.js";import{a as u}from"./chunk-6Z2JRM2G.js";import{c as H,d as Q,e as m,h as k,i as J}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import{b as U,f as X,g as q,h as w,j,k as x}from"./chunk-XVW27JLP.js";import"./chunk-AW4VH2GC.js";import{a as z,b as D,d as y,e as L,g as V}from"./chunk-DORI46RQ.js";import{c as P,t as $,v as B}from"./chunk-XSVH7MQJ.js";import"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import{i as G}from"./chunk-CWOC6VYL.js";import{d as M,f as O,g as I,l as h,o as E,r as A,s as b,u as F}from"./chunk-ZWU3YGKZ.js";import{b as s,c as g}from"./chunk-FWFWESWL.js";import"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as R}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{r as v}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import"./chunk-TXVIAXH2.js";import{Kb as d,Lb as S,Mb as _,Xb as N,cb as l,ja as n,na as f,nb as T,qc as c,rc as C,zb as r}from"./chunk-6SIAYQG6.js";import"./chunk-3IKOHXF5.js";var W=(()=>{let i=class i extends X{constructor(){let o=n(z);super(o),this.sntiService=n(u),this.fb=n(b),this.data=n(D);let e=this.fb;this.dialog=o;let t=this.data;this.form=e.group({name:[t?.name,[M.required]],originator:[t?.originator,[M.required]],body:[t?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[c([u]),T,C],decls:7,vars:5,consts:()=>{let o;o="Name";let e;e="Originator";let t;return t="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","originator","label",e],["formControlName","body","label",t],[3,"actions"]];},template:function(e,t){e&1&&(_(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-input-text",3)(5,"sz-ui-form-field-textarea",4),S()(),_(6,"sz-ui-dialog-actions",5)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(4),r("actions",t.actions));},dependencies:[F,h,O,I,E,A,V,L,G,K,x,q,w,B,P,$],encapsulation:2});let a=i;return a;})();var Y=(()=>{let i=class i{constructor(){this.dialog=n(y),this.sntiService=n(u),this.router=n(v),this.dataSource=new k(),this.appBarConfig={title:R.sms_notification,menu:g.default([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(m.uuid("id"),m.string("originator").setValueClassFontBold(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu(g.more([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openDeleteComponent.bind(this))]))),this.get();}openSaveComponent(o){this.dialog.open(W,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(o){this.dialog.open(j,{data:U.delete(this.sntiService.notificationSmses.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-smses"]],standalone:!0,features:[c([]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(d(0,"sz-ui-table-bar",0),N("changed",function(){return t.get();}),S(),d(1,"sz-ui-table",1),N("update",function(){return t.get();}),S()),e&2&&(r("config",t.appBarConfig)("dataSource",t.dataSource),l(),r("dataSource",t.dataSource));},dependencies:[H,Q],encapsulation:2});let a=i;return a;})();var Fe=[{path:"",component:Y}];export{Fe as default};/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/