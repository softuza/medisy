import{a as C}from"./chunk-KKSCCDKN.js";import{a as p}from"./chunk-Y6DJ4MVW.js";import{a as g,d as Z,e as x,f as ee,i as te,j as ie}from"./chunk-ZWBEQEWG.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{f as G,g as L,h as B,k as P}from"./chunk-BQ3MI4NW.js";import{d as Y}from"./chunk-DPEAMXJP.js";import{h as M}from"./chunk-2C5UG3LV.js";import{a as F,b as q,d as H,e as D,g as _}from"./chunk-WNUUIGGE.js";import{r as K,s as W,t as b}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as R}from"./chunk-JACASQJP.js";import{d as E,f as I,g as h,l as O,n as v,q as z,r as y,u as A}from"./chunk-VXNH5PTX.js";import{Y as c,Z as J}from"./chunk-KQ5MQZXD.js";import{c as X,e as w}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as k,la as Q}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as f,Lb as d,Mb as l,Xb as $,bb as m,cb as a,ea as U,na as u,oa as V,oc as S,pc as N,qb as T,zb as n}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var ne=(()=>{let i=class i extends G{constructor(o,t,e){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(C).map(s=>C[s]),this.form=t.group({notificationId:[null,[E.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(t){return new(t||i)(a(p),a(y),a(F));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[S([]),T,N],decls:7,vars:11,consts:()=>{let o;o="\u0625\u0634\u0639\u0627\u0631";let t;t="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let e;return e="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",o,3,"source"],["formControlName","notificationTypes","label",t,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(),n("source",e.notificaitons),m(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),m(),n("source",e.categories)("config",e.categorySelectConfig),m(),n("actions",e.actions));},dependencies:[A,O,I,h,v,z,_,D,R,P,L,B,b,K],encapsulation:2});let r=i;return r;})();var ae=(()=>{let i=class i extends G{constructor(o,t,e,s){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.data=s,this.title=c.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(C).map(me=>C[me]),this.form=t.group({content:[s.content,[E.required]]});}submit(){this.IsValid();}};i.ɵfac=function(t){return new(t||i)(a(p),a(y),a(F),a(q));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[S([]),T,N],decls:5,vars:5,consts:()=>{let o;return o="\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",o],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),d()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(2),n("actions",e.actions));},dependencies:[A,O,I,h,v,z,_,D,R,P,L,B,b,W],encapsulation:2});let r=i;return r;})();var se=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.sntiService=t,this.router=e,this.dataSource=new Z(["-createdAt"]),this.appBarConfig={title:c.messages,actions:[M.add(this.openCreateComponent.bind(this)),M.menu([M.search()])]},this.dataSource.columnDefs.push(g.uuid("id"),g.date("createdAt").setStacked(g.enum("notificationType").setName(c.type).setValueGetter(s=>J(s.notificationType)).setValueClassFontSmall()),g.number("recipientsCount").setName(c.recipients),g.menu([M.info(this.openInformationComponent.bind(this))])),this.get();}openCreateComponent(){this.dialog.open(ne).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openInformationComponent(o){this.dialog.open(ae,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(x(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(a(H),a(p),a(X));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages"]],features:[S([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(f(0,"sz-ui-table-bar",0),$("changed",function(){return e.get();}),d(),f(1,"sz-ui-table",1),$("update",function(){return e.get();}),d()),t&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),m(),n("dataSource",e.dataSource));},dependencies:[te,ee],encapsulation:2});let r=i;return r;})();var ot=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=V({type:i}),i.ɵinj=U({providers:[p],imports:[w.forChild([{path:"",component:se}]),_,Q,ie,Y,k]});let r=i;return r;})();export{ot as MessagesModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/