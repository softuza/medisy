import{a as g}from"./chunk-BR2BGD6A.js";import{a as l}from"./chunk-YCPLIXKO.js";import{c as q,d as Q,e as _,h as J,i as K}from"./chunk-6VFR2BLG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{f as R,g as L,h as P,k as $}from"./chunk-TDTPOOYH.js";import"./chunk-VU2DRYWU.js";import{a as F,b as X,d as j,e as v,g as b}from"./chunk-QHAXF6DJ.js";import{s as H,t as k,v as G}from"./chunk-NNTGN3JU.js";import"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import{i as D}from"./chunk-2VIOUMQX.js";import{d as E,f as N,g as O,l as h,o as I,r as y,s as z,u as A}from"./chunk-4NISFW37.js";import{b as C,c as U}from"./chunk-RY6DPLLN.js";import"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as c,b as w}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{r as V}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import"./chunk-PR5SF5XM.js";import{Kb as p,Lb as d,Mb as m,Xb as B,cb as s,ja as r,na as f,nb as T,qc as u,rc as S,zb as n}from"./chunk-M4TXNJKT.js";import"./chunk-KEWWYOLQ.js";var Y=(()=>{let i=class i extends R{constructor(){super(r(F)),this.sntiService=r(l),this.fb=r(z),this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(g).map(o=>g[o]);let t=this.fb;this.form=t.group({notificationId:[null,[E.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[u([l]),T,S],decls:7,vars:11,consts:()=>{let t;t="\u0625\u0634\u0639\u0627\u0631";let o;o="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let e;return e="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",t,3,"source"],["formControlName","notificationTypes","label",o,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d()(),m(6,"sz-ui-dialog-actions",5)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(),n("source",e.notificaitons),s(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),s(),n("source",e.categories)("config",e.categorySelectConfig),s(),n("actions",e.actions));},dependencies:[A,h,N,O,I,y,b,v,D,$,L,P,G,H],encapsulation:2});let a=i;return a;})();var Z=(()=>{let i=class i extends R{constructor(){super(r(F)),this.sntiService=r(l),this.fb=r(z),this.data=r(X),this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(g).map(e=>g[e]);let t=this.fb,o=this.data;this.form=t.group({content:[o.content,[E.required]]});}submit(){this.IsValid();}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[u([l]),T,S],decls:5,vars:5,consts:()=>{let t;return t="\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",t],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2),d()(),m(4,"sz-ui-dialog-actions",3)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(2),n("actions",e.actions));},dependencies:[A,h,N,O,I,y,b,v,D,$,L,P,G,k],encapsulation:2});let a=i;return a;})();var x=(()=>{let i=class i{constructor(){this.dialog=r(j),this.sntiService=r(l),this.router=r(V),this.dataSource=new J(["-createdAt"]),this.appBarConfig={title:c.messages,menu:U.default([C.add(this.openCreateComponent.bind(this)),C.menu([C.search()])])},this.dataSource.columnDefs.push(_.uuid("id"),_.date("createdAt").setStacked(_.enum("notificationType").setHeaderName(c.type).setValueGetter(t=>w(t.notificationType)).setValueClassFontSmall()),_.number("recipientsCount").setHeaderName(c.recipients),_.menu(U.more([C.info(this.openInformationComponent.bind(this))]))),this.get();}openCreateComponent(){this.dialog.open(Y).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openInformationComponent(t){this.dialog.open(Z,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages"]],standalone:!0,features:[u([l]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(p(0,"sz-ui-table-bar",0),B("changed",function(){return e.get();}),d(),p(1,"sz-ui-table",1),B("update",function(){return e.get();}),d()),o&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),s(),n("dataSource",e.dataSource));},dependencies:[q,Q],encapsulation:2});let a=i;return a;})();var Ve=[{path:"",component:x}];export{Ve as default};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/