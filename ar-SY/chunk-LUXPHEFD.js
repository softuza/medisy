import{c as J}from"./chunk-WCAHLKSN.js";import{a as m}from"./chunk-TL7L3QKC.js";import{c as j,d as k,e as d,h as x,i as Q}from"./chunk-CAFAE33Z.js";import"./chunk-J5QQY2QR.js";import"./chunk-JOIIV6VE.js";import{b as q}from"./chunk-CNLCC23Q.js";import"./chunk-5E6K5YLE.js";import{b as W,f as $,g as w,h as H,j as U,k as X}from"./chunk-Z2ZUJRKU.js";import"./chunk-3PDBTWFJ.js";import{a as E,b as F,d as D,e as y,g as P}from"./chunk-QI2VJ3F3.js";import{c as V,r as B,t as R}from"./chunk-2WR3J7DZ.js";import"./chunk-EA7HCRH3.js";import"./chunk-7AANOILR.js";import{i as L}from"./chunk-FJQUKBXX.js";import{d as C,f as M,g as N,l as O,o as I,r as A,s as b,u as v}from"./chunk-QSQP3PNI.js";import{b as s,c as g}from"./chunk-E3F62UZG.js";import"./chunk-33ZTXJ25.js";import"./chunk-4MW6KJIR.js";import"./chunk-IZAIB3R2.js";import{a as G}from"./chunk-FENOVBAP.js";import"./chunk-RGHZSPOL.js";import{r as z}from"./chunk-73EUG6I6.js";import"./chunk-SNLNGOLR.js";import"./chunk-SNT3GI4V.js";import"./chunk-3TPLYAOD.js";import{Kb as p,Lb as u,Mb as c,Xb as h,cb as l,ja as a,na as f,nb as T,qc as S,rc as _,zb as r}from"./chunk-4PLW75EI.js";import"./chunk-ZSJPE3V4.js";var K=(()=>{let i=class i extends ${constructor(){let t=a(E);super(t),this.sntiService=a(m),this.fb=a(b),this.data=a(F);let e=this.fb;this.dialog=t;let o=this.data;this.form=e.group({name:[o?.name,[C.required]],body:[o?.body,[C.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationWhatsapps.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationWhatsapps.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-whatsapp-save"]],standalone:!0,features:[S([m]),T,_],decls:6,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;return e="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","body","label",e],[3,"actions"]];},template:function(e,o){e&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3),u()(),c(5,"sz-ui-dialog-actions",4)),e&2&&(r("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),r("formGroup",o.form),l(3),r("actions",o.actions));},dependencies:[v,O,M,N,I,A,P,y,q,L,J,X,w,H,R,V,B],encapsulation:2});let n=i;return n;})();var Y=(()=>{let i=class i{constructor(){this.dialog=a(D),this.sntiService=a(m),this.router=a(z),this.dataSource=new x(),this.appBarConfig={title:G.whatsapp_notification,menu:g.default([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(d.uuid("id"),d.string("name").setValueClassFontBold(),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.menu(g.more([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openDeleteComponent.bind(this))]))),this.get();}openSaveComponent(t){this.dialog.open(K,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(U,{data:W.delete(this.sntiService.notificationWhatsapps.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationWhatsapps.get(this.dataSource.getQuery()).pipe(Q(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-whatsapps"]],standalone:!0,features:[S([m]),_],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(p(0,"sz-ui-table-bar",0),h("changed",function(){return o.get();}),u(),p(1,"sz-ui-table",1),h("update",function(){return o.get();}),u()),e&2&&(r("config",o.appBarConfig)("dataSource",o.dataSource),l(),r("dataSource",o.dataSource));},dependencies:[j,k],encapsulation:2});let n=i;return n;})();var Fe=[{path:"",component:Y}];export{Fe as default};/**i18n:78deb23436623189b35691a00c31a25bdc017296f03b26aff11dd3cf4cf58478*/