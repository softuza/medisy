import{a as C}from"./chunk-A7RB47IO.js";import{a as l}from"./chunk-PSV6XFDW.js";import{a as q,b as Q,c as g,f as J,g as K}from"./chunk-BBJAZ6GP.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{f as R,g as L,h as P,k as $}from"./chunk-BQYTVP5O.js";import"./chunk-QVJ4Z3HM.js";import{a as F,b as V,d as X,e as v,g as b}from"./chunk-HQFAQEC3.js";import{r as w,s as H,u as G}from"./chunk-26COPQ6D.js";import"./chunk-5WAYP5D7.js";import"./chunk-4PSVU3RC.js";import{i as D}from"./chunk-N4OOJIAX.js";import{d as E,f as N,g as h,l as O,n as I,q as y,r as z,t as A}from"./chunk-GLZMJYJP.js";import{b as M,c as k}from"./chunk-QOXR5OPH.js";import"./chunk-NC2TMKBF.js";import"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as c,b as j}from"./chunk-GM2OQK6E.js";import"./chunk-K5FLVMR2.js";import{r as U}from"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import"./chunk-UEBH5A2M.js";import{Jb as d,Kb as p,Lb as m,Wb as B,bb as s,ja as r,mb as T,mc as S,na as u,nc as _,yb as n}from"./chunk-6J2YPVJB.js";import"./chunk-TH7MQ6T4.js";var Y=(()=>{let i=class i extends R{constructor(){let t=r(F);super(t),this.sntiService=r(l),this.fb=r(z),this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(C).map(e=>C[e]);let o=this.fb;this.dialog=t,this.form=o.group({notificationId:[null,[E.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[S([l]),T,_],decls:7,vars:11,consts:()=>{let t;t="\u0625\u0634\u0639\u0627\u0631";let o;o="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let e;return e="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",t,3,"source"],["formControlName","notificationTypes","label",o,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),p()(),m(6,"sz-ui-dialog-actions",5)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(),n("source",e.notificaitons),s(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),s(),n("source",e.categories)("config",e.categorySelectConfig),s(),n("actions",e.actions));},dependencies:[A,O,N,h,I,y,b,v,D,$,L,P,G,w],encapsulation:2});let a=i;return a;})();var Z=(()=>{let i=class i extends R{constructor(){let t=r(F);super(t),this.sntiService=r(l),this.fb=r(z),this.data=r(V),this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(C).map(f=>C[f]);let o=this.fb;this.dialog=t;let e=this.data;this.form=o.group({content:[e.content,[E.required]]});}submit(){this.IsValid();}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[S([l]),T,_],decls:5,vars:5,consts:()=>{let t;return t="\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",t],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2),p()(),m(4,"sz-ui-dialog-actions",3)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(2),n("actions",e.actions));},dependencies:[A,O,N,h,I,y,b,v,D,$,L,P,G,H],encapsulation:2});let a=i;return a;})();var x=(()=>{let i=class i{constructor(){this.dialog=r(X),this.sntiService=r(l),this.router=r(U),this.dataSource=new J(["-createdAt"]),this.appBarConfig={title:c.messages,menu:k.default().setItems([M.add(this.openCreateComponent.bind(this)),M.menu([M.search()])])},this.dataSource.columnDefs.push(g.uuid("id"),g.date("createdAt").setStacked(g.enum("notificationType").setHeaderName(c.type).setValueGetter(t=>j(t.notificationType)).setValueClassFontSmall()),g.number("recipientsCount").setHeaderName(c.recipients),g.menu([M.info(this.openInformationComponent.bind(this))])),this.get();}openCreateComponent(){this.dialog.open(Y).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openInformationComponent(t){this.dialog.open(Z,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages"]],standalone:!0,features:[S([l]),_],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(d(0,"sz-ui-table-bar",0),B("changed",function(){return e.get();}),p(),d(1,"sz-ui-table",1),B("update",function(){return e.get();}),p()),o&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),s(),n("dataSource",e.dataSource));},dependencies:[q,Q],encapsulation:2});let a=i;return a;})();var Ve=[{path:"",component:x}];export{Ve as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/