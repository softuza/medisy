import{a as M}from"./chunk-LEUFBNU5.js";import{a as f}from"./chunk-KQNVFDOS.js";import{a as g,b as ee,d as te,e as ie,g as oe,j as re,k as ne}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import"./chunk-UYYWHWBI.js";import{e as L,f as B,g as $,j as P}from"./chunk-5NWVIDQT.js";import{a as b}from"./chunk-NXQ5VREG.js";import{h as x}from"./chunk-HWSLRHWT.js";import{a as F,b as H,d as Q,e as D,g as _}from"./chunk-Z2LVGH3F.js";import{s as Y,u as Z,v as R}from"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as p,d as W}from"./chunk-NE5STG6Q.js";import{i as G}from"./chunk-LGG5C546.js";import{d as N,f as I,g as O,l as h,n as A,q as z,r as v,u as y}from"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{c as k,e as w}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ia as q,ja as J,la as K}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as c,Kb as u,Lb as l,Vb as X,Wb as T,bb as m,cb as s,ea as U,na as d,nc as S,oa as V,oc as E,qb as C,zb as n}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var me=(()=>{let i=class i extends L{constructor(o,t,e){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(M).map(a=>M[a]),this.form=t.group({notificationId:[null,[N.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(t){return new(t||i)(s(f),s(v),s(F));},i.ɵcmp=d({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[S([]),C,E],decls:7,vars:11,consts:()=>{let o;o="Notification";let t;t="Types";let e;return e="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",o,3,"source"],["formControlName","notificationTypes","label",t,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),u()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(),n("source",e.notificaitons),m(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),m(),n("source",e.categories)("config",e.categorySelectConfig),m(),n("actions",e.actions));},dependencies:[y,h,I,O,A,z,_,D,G,P,B,$,R,Y],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i extends L{constructor(o,t,e,a){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.data=a,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(M).map(pe=>M[pe]),this.form=t.group({content:[a.content,[N.required]]});}submit(){this.IsValid();}};i.ɵfac=function(t){return new(t||i)(s(f),s(v),s(F),s(H));},i.ɵcmp=d({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[S([]),C,E],decls:5,vars:5,consts:()=>{let o;return o="Content",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",o],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),u()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(2),n("actions",e.actions));},dependencies:[y,h,I,O,A,z,_,D,G,P,B,$,R,Z],encapsulation:2});let r=i;return r;})();var ce=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.sntiService=t,this.router=e,this.dataSource=new te(["-createdAt"]),this.appBarConfig={title:p.messages},this.dataSource.columnDefs.push(g.uuid("id"),g.date("createdAt").setStacked(g.enum("notificationType").setName(p.type).setValueGetter(a=>W(a.notificationType)).setValueClassFontSmall()),g.number("recipientsCount").setName(p.recipients),ee.menu([x.info(a=>this.openInformationComponent(a))])),this.get();}openCreateComponent(){this.dialog.open(me).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openInformationComponent(o){this.dialog.open(le,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(s(Q),s(f),s(k));},i.ɵcmp=d({type:i,selectors:[["sz-mgmt-notification-messages"]],features:[S([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(l(0,"sz-ui-app-bar",1),c(1,"sz-ui-table-search-filter",2),T("changed",function(){return e.get();}),c(2,"button",3),T("click",function(){return e.openCreateComponent();}),c(3,"span"),X(4,0),u()()(),c(5,"sz-ui-table",4),T("update",function(){return e.get();}),u()),t&2&&(n("config",e.appBarConfig),m(),n("dataSource",e.dataSource),m(4),n("dataSource",e.dataSource));},dependencies:[J,re,oe,b],encapsulation:2});let r=i;return r;})();var mt=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=V({type:i}),i.ɵinj=U({providers:[f],imports:[w.forChild([{path:"",component:ce}]),_,K,ne,b,q]});let r=i;return r;})();export{mt as MessagesModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/