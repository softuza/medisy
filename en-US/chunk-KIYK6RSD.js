import{a as M}from"./chunk-U25DHMMA.js";import{a as d}from"./chunk-WBEDTO3H.js";import{a as C,b as te,d as ie,f as oe,i as re,j as ne}from"./chunk-NBZRVN3Y.js";import"./chunk-V3IDSUBA.js";import"./chunk-72QARLDS.js";import"./chunk-4XEE4I4T.js";import{e as L,f as $,g as B,j as P}from"./chunk-JDQ4W3QS.js";import"./chunk-5XS2JNPH.js";import{a as b}from"./chunk-3TCVELMY.js";import{h as ee}from"./chunk-VN32AWOL.js";import{a as F,b as H,d as Q,e as D,g as _}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{j as W,v as Z,x,y as R}from"./chunk-HZVTZU6E.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as p,d as Y}from"./chunk-NXGV7MLA.js";import{j as G}from"./chunk-QN2XJZ42.js";import{d as N,f as I,g as O,l as h,n as z,q as A,r as v,u as y}from"./chunk-YQYD3PHP.js";import"./chunk-FDTJH5UN.js";import{c as k,e as w}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as q,ia as J,ka as K}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as c,Jb as f,Kb as l,Ub as X,Vb as T,ab as m,bb as s,ea as U,kc as S,lc as E,na as u,oa as V,ob as g,yb as n}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var me=(()=>{let i=class i extends L{constructor(o,t,e,a){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.data=a,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(M).map(pe=>M[pe]),this.form=t.group({content:[a.content,[N.required]]});}submit(){this.IsValid();}};i.ɵfac=function(t){return new(t||i)(s(d),s(v),s(F),s(H));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[S([]),g,E],decls:5,vars:5,consts:()=>{let o;return o="Content",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",o],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),f()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(2),n("actions",e.actions));},dependencies:[y,h,I,O,z,A,_,D,G,P,$,B,R,x],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i extends L{constructor(o,t,e){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(M).map(a=>M[a]),this.form=t.group({notificationId:[null,[N.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(t){return new(t||i)(s(d),s(v),s(F));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[S([]),g,E],decls:7,vars:11,consts:()=>{let o;o="Notification";let t;t="Types";let e;return e="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",o,3,"source"],["formControlName","notificationTypes","label",t,3,"source","localizedValue","multiple"],["formControlName","categoryId","label",e,3,"source","emptyOption"],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),f()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(),n("source",e.notificaitons),m(),n("source",e.notificationTypes)("localizedValue",!0)("multiple",!0),m(),n("source",e.categories)("emptyOption",!0),m(),n("actions",e.actions));},dependencies:[y,h,I,O,z,A,_,D,G,P,$,B,R,Z],encapsulation:2});let r=i;return r;})();var ce=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.sntiService=t,this.router=e,this.title=p.messages,this.dataSource=new ie(["-createdAt"]),this.dataSource.columnDefs.push(C.uuid("id"),C.date("createdAt").setStacked(C.enum("notificationType").setName(p.type).setValueGetter(a=>Y(a.notificationType)).setValueClassFontSmall()),C.number("recipientsCount").setName(p.recipients),te.menu([ee.info(a=>this.openInformationComponent(a))])),this.get();}openCreateComponent(){this.dialog.open(le).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openInformationComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(W(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(s(Q),s(d),s(k));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages"]],features:[S([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(l(0,"sz-ui-app-bar",1),c(1,"sz-ui-table-search-filter",2),T("changed",function(){return e.get();}),c(2,"button",3),T("click",function(){return e.openCreateComponent();}),c(3,"span"),X(4,0),f()()(),c(5,"sz-ui-table",4),T("update",function(){return e.get();}),f()),t&2&&(n("title",e.title),m(),n("dataSource",e.dataSource),m(4),n("dataSource",e.dataSource));},dependencies:[J,re,oe,b],encapsulation:2});let r=i;return r;})();var lt=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=V({type:i}),i.ɵinj=U({providers:[d],imports:[w.forChild([{path:"",component:ce}]),_,K,ne,b,q]});let r=i;return r;})();export{lt as MessagesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/