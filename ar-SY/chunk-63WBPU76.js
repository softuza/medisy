import{a as g}from"./chunk-JPGPFKCU.js";import{a as f}from"./chunk-WSHHWXYE.js";import{a as M,c as ee,d as te,f as ie,i as oe,j as re}from"./chunk-AUPU6QI4.js";import"./chunk-OKGOWQL5.js";import"./chunk-NEHTWZRD.js";import"./chunk-7CWIHV7X.js";import{f as L,g as B,h as $,k as P}from"./chunk-6Y6J7VB6.js";import{a as b}from"./chunk-VAHBDTYA.js";import{h as x}from"./chunk-NR4QF72D.js";import{a as F,b as H,d as Q,e as D,g as _}from"./chunk-EJOHO2EB.js";import{r as Y,s as Z,t as R}from"./chunk-YZKNUD65.js";import"./chunk-UFKQJOL3.js";import"./chunk-TL57E7RA.js";import"./chunk-GOMTDU6R.js";import"./chunk-HVAN3DT6.js";import{i as G}from"./chunk-F2RDDOGN.js";import{d as N,f as I,g as O,l as h,n as A,q as v,r as z,u as y}from"./chunk-MGV73Q32.js";import{Y as p,Z as W}from"./chunk-I7PR7JM4.js";import{c as k,e as w}from"./chunk-5XANXOAJ.js";import"./chunk-N5JOJLCN.js";import{ia as q,ja as J,la as K}from"./chunk-IM7EI72R.js";import"./chunk-327W6FQA.js";import{Kb as c,Lb as d,Mb as l,Wb as X,Xb as T,bb as m,cb as a,ea as U,na as u,oa as V,oc as S,pc as E,qb as C,zb as n}from"./chunk-UELVXDXK.js";import"./chunk-2GMD7R3L.js";var se=(()=>{let i=class i extends L{constructor(o,t,e){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(g).map(s=>g[s]),this.form=t.group({notificationId:[null,[N.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(t){return new(t||i)(a(f),a(z),a(F));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[S([]),C,E],decls:7,vars:11,consts:()=>{let o;o="\u0625\u0634\u0639\u0627\u0631";let t;t="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let e;return e="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",o,3,"source"],["formControlName","notificationTypes","label",t,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(),n("source",e.notificaitons),m(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),m(),n("source",e.categories)("config",e.categorySelectConfig),m(),n("actions",e.actions));},dependencies:[y,h,I,O,A,v,_,D,G,P,B,$,R,Y],encapsulation:2});let r=i;return r;})();var me=(()=>{let i=class i extends L{constructor(o,t,e,s){super(e),this.sntiService=o,this.fb=t,this.dialog=e,this.data=s,this.title=p.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(g).map(ce=>g[ce]),this.form=t.group({content:[s.content,[N.required]]});}submit(){this.IsValid();}};i.ɵfac=function(t){return new(t||i)(a(f),a(z),a(F),a(H));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[S([]),C,E],decls:5,vars:5,consts:()=>{let o;return o="\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",o],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),d()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(2),n("actions",e.actions));},dependencies:[y,h,I,O,A,v,_,D,G,P,B,$,R,Z],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.sntiService=t,this.router=e,this.dataSource=new ee(["-createdAt"]),this.appBarConfig={title:p.messages},this.dataSource.columnDefs.push(M.uuid("id"),M.date("createdAt").setStacked(M.enum("notificationType").setName(p.type).setValueGetter(s=>W(s.notificationType)).setValueClassFontSmall()),M.number("recipientsCount").setName(p.recipients),M.menu([x.info(this.openInformationComponent.bind(this))])),this.get();}openCreateComponent(){this.dialog.open(se).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openInformationComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(a(Q),a(f),a(k));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-messages"]],features:[S([])],decls:6,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(l(0,"sz-ui-app-bar",1),c(1,"sz-ui-table-search-filter",2),T("changed",function(){return e.get();}),c(2,"button",3),T("click",function(){return e.openCreateComponent();}),c(3,"span"),X(4,0),d()()(),c(5,"sz-ui-table",4),T("update",function(){return e.get();}),d()),t&2&&(n("config",e.appBarConfig),m(),n("dataSource",e.dataSource),m(4),n("dataSource",e.dataSource));},dependencies:[J,oe,ie,b],encapsulation:2});let r=i;return r;})();var st=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=V({type:i}),i.ɵinj=U({providers:[f],imports:[w.forChild([{path:"",component:le}]),_,K,re,b,q]});let r=i;return r;})();export{st as MessagesModule};/**i18n:fe59e4cec730fb22fcad5443103077b4b8cf7932d5cc1616a4c03edd493e1605*/