import{a as M}from"./chunk-DCFPTNA3.js";import{a as u}from"./chunk-R2IY7OHC.js";import{a as C,b as ee,d as te,e as ie,g as oe,j as re,k as ne}from"./chunk-3KIO23V7.js";import"./chunk-UDBXG2VS.js";import"./chunk-3EZ7YOIF.js";import"./chunk-EZYZSWQV.js";import"./chunk-PIF3LXPQ.js";import{e as L,f as $,g as B,j as P}from"./chunk-MLAHAJFY.js";import{a as b}from"./chunk-3JYLOQ62.js";import{h as x}from"./chunk-6WYKIJA5.js";import{a as F,b as H,d as Q,e as D,g as _}from"./chunk-AWTFDRVU.js";import"./chunk-EUY4YGUM.js";import{A as R,x as Y,z as Z}from"./chunk-D4OV432Z.js";import"./chunk-Q6QXXTHO.js";import"./chunk-ZI7LGOZY.js";import{c as p,d as W}from"./chunk-AR6ZPEMB.js";import{i as G}from"./chunk-LB6OFIMK.js";import{d as N,f as I,g as O,l as h,n as A,q as z,r as v,u as y}from"./chunk-H6LOKDLY.js";import"./chunk-WOEHPYTV.js";import{c as k,e as w}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as q,ja as J,la as K}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as c,Kb as f,Lb as l,Vb as X,Wb as T,bb as m,cb as s,ea as U,na as d,nc as S,oa as V,oc as E,qb as g,zb as n}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var me=(()=>{let i=class i extends L{constructor(o,t,e){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(M).map(a=>M[a]),this.form=t.group({notificationId:[null,[N.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(t){return new(t||i)(s(u),s(v),s(F));},i.ɵcmp=d({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[S([]),g,E],decls:7,vars:11,consts:()=>{let o;o="Notification";let t;t="Types";let e;return e="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",o,3,"source"],["formControlName","notificationTypes","label",t,3,"source","localizedValue","multiple"],["formControlName","categoryId","label",e,3,"source","emptyOption"],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),f()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(),n("source",e.notificaitons),m(),n("source",e.notificationTypes)("localizedValue",!0)("multiple",!0),m(),n("source",e.categories)("emptyOption",!0),m(),n("actions",e.actions));},dependencies:[y,h,I,O,A,z,_,D,G,P,$,B,R,Y],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i extends L{constructor(o,t,e,a){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.data=a,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(M).map(pe=>M[pe]),this.form=t.group({content:[a.content,[N.required]]});}submit(){this.IsValid();}};i.ɵfac=function(t){return new(t||i)(s(u),s(v),s(F),s(H));},i.ɵcmp=d({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[S([]),g,E],decls:5,vars:5,consts:()=>{let o;return o="Content",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",o],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),f()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(2),n("actions",e.actions));},dependencies:[y,h,I,O,A,z,_,D,G,P,$,B,R,Z],encapsulation:2});let r=i;return r;})();var ce=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.sntiService=t,this.router=e,this.title=p.messages,this.dataSource=new te(["-createdAt"]),this.dataSource.columnDefs.push(C.uuid("id"),C.date("createdAt").setStacked(C.enum("notificationType").setName(p.type).setValueGetter(a=>W(a.notificationType)).setValueClassFontSmall()),C.number("recipientsCount").setName(p.recipients),ee.menu([x.info(a=>this.openInformationComponent(a))])),this.get();}openCreateComponent(){this.dialog.open(me).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openInformationComponent(o){this.dialog.open(le,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(s(Q),s(u),s(k));},i.ɵcmp=d({type:i,selectors:[["sz-mgmt-notification-messages"]],features:[S([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(l(0,"sz-ui-app-bar",1),c(1,"sz-ui-table-search-filter",2),T("changed",function(){return e.get();}),c(2,"button",3),T("click",function(){return e.openCreateComponent();}),c(3,"span"),X(4,0),f()()(),c(5,"sz-ui-table",4),T("update",function(){return e.get();}),f()),t&2&&(n("title",e.title),m(),n("dataSource",e.dataSource),m(4),n("dataSource",e.dataSource));},dependencies:[J,re,oe,b],encapsulation:2});let r=i;return r;})();var mt=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=V({type:i}),i.ɵinj=U({providers:[u],imports:[w.forChild([{path:"",component:ce}]),_,K,ne,b,q]});let r=i;return r;})();export{mt as MessagesModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/