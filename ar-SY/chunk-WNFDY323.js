import{a as u}from"./chunk-YA576DX7.js";import{a as C,b as te,d as ie,f as oe,i as re,j as ne}from"./chunk-B25XGKOG.js";import"./chunk-GUJH2ZHK.js";import"./chunk-WY4JMTGT.js";import"./chunk-TVIACZGJ.js";import"./chunk-62XZMC7M.js";import{e as L,f as $,g as P,j as B}from"./chunk-VA4EJHO7.js";import{a as R}from"./chunk-5QGUKVLR.js";import{h as ee}from"./chunk-3SFO4XHF.js";import{a as F,b as H,d as W,e as D,g as M}from"./chunk-4IYZXCTQ.js";import"./chunk-B6FHKCWW.js";import{q as Z,s as x,t as b}from"./chunk-IDTP3F23.js";import{c as K}from"./chunk-7CD7ORH3.js";import"./chunk-MHXZNKEI.js";import"./chunk-BGVLRNCR.js";import{c as p,d as Y}from"./chunk-M6R6RSYM.js";import{i as G}from"./chunk-YWS2AVU2.js";import{d as g,f as I,g as O,k as h,m as z,p as v,q as A,t as y}from"./chunk-KYLOOTHR.js";import"./chunk-PJNSKDJY.js";import{c as k,e as w}from"./chunk-TYR5LGJM.js";import"./chunk-OXU5KCQK.js";import{ha as q,ia as Q,ka as J}from"./chunk-HFTO62ZC.js";import"./chunk-O76I7XXB.js";import{Db as n,Nb as c,Ob as d,Pb as l,Zb as X,_b as E,hb as m,ib as s,ka as U,pc as _,qc as T,ua as S,ub as N,va as V}from"./chunk-UF7XZZTK.js";var f=function(r){return r.Email="Email",r.Sms="Sms",r.Push="Push",r.WhatsApp="WhatsApp",r;}(f||{});var me=(()=>{let i=class i extends L{constructor(o,t,e,a){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.data=a,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(f).map(pe=>f[pe]),this.form=t.group({content:[a.content,[g.required]]});}submit(){this.IsValid();}};i.ɵfac=function(t){return new(t||i)(s(u),s(A),s(F),s(H));},i.ɵcmp=S({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[_([]),N,T],decls:5,vars:5,consts:()=>{let o;return o="\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",o],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),d()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(2),n("actions",e.actions));},dependencies:[y,h,I,O,z,v,M,D,G,B,$,P,b,x],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i extends L{constructor(o,t,e){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(f).map(a=>f[a]),this.form=t.group({notificationId:[null,[g.required]],categoryId:[null,[]],notificationTypes:[null,[]],recipients:[[{identifier:"7e88a4f5-a2bb-48e6-8b84-823fb3fd3c86"}],[g.required]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(t){return new(t||i)(s(u),s(A),s(F));},i.ɵcmp=S({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[_([]),N,T],decls:7,vars:11,consts:()=>{let o;o="\u0625\u0634\u0639\u0627\u0631";let t;t="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let e;return e="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",o,3,"source"],["formControlName","notificationTypes","label",t,3,"source","localizedValue","multiple"],["formControlName","categoryId","label",e,3,"source","emptyOption"],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(),n("source",e.notificaitons),m(),n("source",e.notificationTypes)("localizedValue",!0)("multiple",!0),m(),n("source",e.categories)("emptyOption",!0),m(),n("actions",e.actions));},dependencies:[y,h,I,O,z,v,M,D,G,B,$,P,b,Z],encapsulation:2});let r=i;return r;})();var ce=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.sntiService=t,this.router=e,this.title=p.messages,this.dataSource=new ie(["-createdAt"]),this.dataSource.columnDefs.push(C.uuid("id"),C.date("createdAt").setStacked(C.enum("notificationType").setName(p.type).setValueGetter(a=>Y(a.notificationType)).setValueClassFontSmall()),C.number("recipientsCount").setName(p.recipients),te.menu([ee.info(a=>this.openInformationComponent(a))])),this.get();}openCreateComponent(){this.dialog.open(le).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openInformationComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(K(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(s(W),s(u),s(k));},i.ɵcmp=S({type:i,selectors:[["sz-mgmt-notification-messages"]],features:[_([])],decls:6,vars:4,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,e){t&1&&(l(0,"sz-ui-app-bar",1),c(1,"sz-ui-table-search-filter",2),E("changed",function(){return e.get();}),c(2,"button",3),E("click",function(){return e.openCreateComponent();}),c(3,"span"),X(4,0),d()()(),c(5,"sz-ui-table",4),E("update",function(){return e.get();}),d()),t&2&&(n("title",e.title),m(),n("dataSource",e.dataSource),m(4),n("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[Q,re,oe,R],encapsulation:2});let r=i;return r;})();var ut=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=V({type:i}),i.ɵinj=U({providers:[u],imports:[w.forChild([{path:"",component:ce}]),M,J,ne,R,q]});let r=i;return r;})();export{ut as MessagesModule};/**i18n:88615e5307f75fc1705936b6e5687b1e83288c5c646feb5259c0cddcf24b650d*/