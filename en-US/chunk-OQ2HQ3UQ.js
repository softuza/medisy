import{c as J}from"./chunk-XVBWHRHB.js";import{a as m}from"./chunk-6Z2JRM2G.js";import{c as q,d as k,e as d,h as x,i as Q}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import{b as $,f as w,g as H,h as U,j as X,k as j}from"./chunk-XVW27JLP.js";import"./chunk-AW4VH2GC.js";import{a as E,b as F,d as D,e as y,g as P}from"./chunk-DORI46RQ.js";import{c as V,r as B,t as R,v as W}from"./chunk-XSVH7MQJ.js";import"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import{i as L}from"./chunk-CWOC6VYL.js";import{d as C,f as M,g as N,l as O,o as I,r as A,s as b,u as v}from"./chunk-ZWU3YGKZ.js";import{b as s,c as g}from"./chunk-FWFWESWL.js";import"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as G}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{r as z}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import"./chunk-TXVIAXH2.js";import{Kb as p,Lb as u,Mb as c,Xb as h,cb as l,ja as a,na as f,nb as T,qc as S,rc as _,zb as r}from"./chunk-6SIAYQG6.js";import"./chunk-3IKOHXF5.js";var K=(()=>{let i=class i extends w{constructor(){let t=a(E);super(t),this.sntiService=a(m),this.fb=a(b),this.data=a(F);let e=this.fb;this.dialog=t;let o=this.data;this.form=e.group({name:[o?.name,[C.required]],body:[o?.body,[C.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationWhatsapps.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationWhatsapps.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-whatsapp-save"]],standalone:!0,features:[S([m]),T,_],decls:6,vars:5,consts:()=>{let t;t="Name";let e;return e="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","body","label",e],[3,"actions"]];},template:function(e,o){e&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3),u()(),c(5,"sz-ui-dialog-actions",4)),e&2&&(r("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),r("formGroup",o.form),l(3),r("actions",o.actions));},dependencies:[v,O,M,N,I,A,P,y,B,L,J,j,H,U,W,V,R],encapsulation:2});let n=i;return n;})();var Y=(()=>{let i=class i{constructor(){this.dialog=a(D),this.sntiService=a(m),this.router=a(z),this.dataSource=new x(),this.appBarConfig={title:G.whatsapp_notification,menu:g.default([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(d.uuid("id"),d.string("name").setValueClassFontBold(),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.menu(g.more([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openDeleteComponent.bind(this))]))),this.get();}openSaveComponent(t){this.dialog.open(K,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(X,{data:$.delete(this.sntiService.notificationWhatsapps.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationWhatsapps.get(this.dataSource.getQuery()).pipe(Q(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-whatsapps"]],standalone:!0,features:[S([m]),_],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(p(0,"sz-ui-table-bar",0),h("changed",function(){return o.get();}),u(),p(1,"sz-ui-table",1),h("update",function(){return o.get();}),u()),e&2&&(r("config",o.appBarConfig)("dataSource",o.dataSource),l(),r("dataSource",o.dataSource));},dependencies:[q,k],encapsulation:2});let n=i;return n;})();var Fe=[{path:"",component:Y}];export{Fe as default};/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/