import{a as g}from"./chunk-3CS3UYRR.js";import{a as l}from"./chunk-4BCQQKAW.js";import{c as q,d as Q,e as _,h as J,i as K}from"./chunk-LFBBKJHQ.js";import"./chunk-DJTCXLE6.js";import"./chunk-WR67YADW.js";import"./chunk-DNPEC467.js";import{g as R,h as L,i as P,l as $}from"./chunk-3VDM3QBA.js";import"./chunk-SH55UZR2.js";import{a as F,b as X,d as j,e as v,g as b}from"./chunk-NXWHFD5J.js";import{p as H,q as k,s as G}from"./chunk-YE7OGPQO.js";import"./chunk-QPPKO7QS.js";import"./chunk-NHKTZSL7.js";import"./chunk-JDRER5OW.js";import{j as D}from"./chunk-VLFDLUKF.js";import{d as E,f as N,g as O,l as h,o as I,r as y,s as z,u as A}from"./chunk-SZ4JOIPB.js";import{b as C,c as U}from"./chunk-ZKT34U6O.js";import"./chunk-OAHNBXW3.js";import"./chunk-6KLEPFJV.js";import{c,d as w}from"./chunk-TROKCKRK.js";import"./chunk-I5YU2A2W.js";import{r as V}from"./chunk-OH3VJFHV.js";import"./chunk-KHQUVCMB.js";import"./chunk-O5U4UK7G.js";import"./chunk-IOFQXYPN.js";import{Jb as p,Kb as d,Lb as m,Wb as B,bb as s,ja as r,mb as T,mc as u,na as f,nc as S,yb as n}from"./chunk-4TXFHTB5.js";import"./chunk-UD7IN7DC.js";var Y=(()=>{let i=class i extends R{constructor(){super(r(F)),this.sntiService=r(l),this.fb=r(z),this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(g).map(o=>g[o]);let t=this.fb;this.form=t.group({notificationId:[null,[E.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[u([l]),T,S],decls:7,vars:11,consts:()=>{let t;t="Notification";let o;o="Types";let e;return e="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",t,3,"source"],["formControlName","notificationTypes","label",o,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d()(),m(6,"sz-ui-dialog-actions",5)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(),n("source",e.notificaitons),s(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),s(),n("source",e.categories)("config",e.categorySelectConfig),s(),n("actions",e.actions));},dependencies:[A,h,N,O,I,y,b,v,D,$,L,P,G,H],encapsulation:2});let a=i;return a;})();var Z=(()=>{let i=class i extends R{constructor(){super(r(F)),this.sntiService=r(l),this.fb=r(z),this.data=r(X),this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(g).map(e=>g[e]);let t=this.fb,o=this.data;this.form=t.group({content:[o.content,[E.required]]});}submit(){this.IsValid();}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[u([l]),T,S],decls:5,vars:5,consts:()=>{let t;return t="Content",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",t],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2),d()(),m(4,"sz-ui-dialog-actions",3)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(2),n("actions",e.actions));},dependencies:[A,h,N,O,I,y,b,v,D,$,L,P,G,k],encapsulation:2});let a=i;return a;})();var x=(()=>{let i=class i{constructor(){this.dialog=r(j),this.sntiService=r(l),this.router=r(V),this.dataSource=new J(["-createdAt"]),this.appBarConfig={title:c.messages,menu:U.default([C.add(this.openCreateComponent.bind(this)),C.menu([C.search()])])},this.dataSource.columnDefs.push(_.uuid("id"),_.date("createdAt").setStacked(_.enum("notificationType").setHeaderName(c.type).setValueGetter(t=>w(t.notificationType)).setValueClassFontSmall()),_.number("recipientsCount").setHeaderName(c.recipients),_.menu(U.more([C.info(this.openInformationComponent.bind(this))]))),this.get();}openCreateComponent(){this.dialog.open(Y).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openInformationComponent(t){this.dialog.open(Z,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages"]],standalone:!0,features:[u([l]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(p(0,"sz-ui-table-bar",0),B("changed",function(){return e.get();}),d(),p(1,"sz-ui-table",1),B("update",function(){return e.get();}),d()),o&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),s(),n("dataSource",e.dataSource));},dependencies:[q,Q],encapsulation:2});let a=i;return a;})();var Ve=[{path:"",component:x}];export{Ve as default};/**i18n:3baa7a52fa2dfa3c4602a0f5c18b10b468e666f31530cd067c23c1079d9af4f3*/