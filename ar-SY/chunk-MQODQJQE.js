import{a as C}from"./chunk-UQHA2IJL.js";import{a as _}from"./chunk-RLYTRSWS.js";import{a as q,b as Q,c as g,f as J,g as K}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{f as R,g as L,h as B,k as P}from"./chunk-ZUXIOQ5W.js";import"./chunk-BJI27WIG.js";import{a as F,b as V,d as X,e as v,g as b}from"./chunk-XPOR4ANW.js";import{r as w,s as H,t as G}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import{i as D}from"./chunk-OLKWA3AP.js";import{d as E,f as N,g as h,l as O,n as I,q as y,r as z,t as A}from"./chunk-H2FFMEH6.js";import{b as M,c as k}from"./chunk-QW5IGDYW.js";import"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as m,b as j}from"./chunk-TCPYXQGZ.js";import{r as U}from"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import"./chunk-OIZYHDJE.js";import{Jb as c,Kb as d,Lb as l,Wb as $,bb as s,ja as r,mb as T,mc as u,na as f,nc as S,yb as n}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var Y=(()=>{let i=class i extends R{constructor(){let t=r(F);super(t),this.sntiService=r(_),this.fb=r(z),this.title=m.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypeSelectConfig={multiple:!0},this.categorySelectConfig={emptyOption:!0},this.notificationTypes=Object.keys(C).map(e=>C[e]);let o=this.fb;this.dialog=t,this.form=o.group({notificationId:[null,[E.required]],categoryId:[null,[]],notificationTypes:[null,[]]});}submit(){this.IsValid()&&this.save(this.sntiService.messages.create(this.form.value));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages-create"]],standalone:!0,features:[u([]),T,S],decls:7,vars:11,consts:()=>{let t;t="\u0625\u0634\u0639\u0627\u0631";let o;o="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let e;return e="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","notificationId","label",t,3,"source"],["formControlName","notificationTypes","label",o,3,"source","localizedValue","config"],["formControlName","categoryId","label",e,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d()(),l(6,"sz-ui-dialog-actions",5)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(),n("source",e.notificaitons),s(),n("source",e.notificationTypes)("localizedValue",!0)("config",e.notificationTypeSelectConfig),s(),n("source",e.categories)("config",e.categorySelectConfig),s(),n("actions",e.actions));},dependencies:[A,O,N,h,I,y,b,v,D,P,L,B,G,w],encapsulation:2});let a=i;return a;})();var Z=(()=>{let i=class i extends R{constructor(){let t=r(F);super(t),this.sntiService=r(_),this.fb=r(z),this.data=r(V),this.title=m.create,this.notificaitons=this.sntiService.notifications.getAll({orderBy:["name"]}),this.categories=this.sntiService.categories.getAll({orderBy:["name"]}),this.notificationTypes=Object.keys(C).map(p=>C[p]);let o=this.fb;this.dialog=t;let e=this.data;this.form=o.group({content:[e.content,[E.required]]});}submit(){this.IsValid();}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages-info"]],standalone:!0,features:[u([]),T,S],decls:5,vars:5,consts:()=>{let t;return t="\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","content","label",t],[3,"actions"]];},template:function(o,e){o&1&&(l(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2),d()(),l(4,"sz-ui-dialog-actions",3)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(2),n("actions",e.actions));},dependencies:[A,O,N,h,I,y,b,v,D,P,L,B,G,H],encapsulation:2});let a=i;return a;})();var x=(()=>{let i=class i{constructor(){this.dialog=r(X),this.sntiService=r(_),this.router=r(U),this.dataSource=new J(["-createdAt"]),this.appBarConfig={title:m.messages,menu:k.default().setItems([M.add(this.openCreateComponent.bind(this)),M.menu([M.search()])])},this.dataSource.columnDefs.push(g.uuid("id"),g.date("createdAt").setStacked(g.enum("notificationType").setHeaderName(m.type).setValueGetter(t=>j(t.notificationType)).setValueClassFontSmall()),g.number("recipientsCount").setHeaderName(m.recipients),g.menu([M.info(this.openInformationComponent.bind(this))])),this.get();}openCreateComponent(){this.dialog.open(Y).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openInformationComponent(t){this.dialog.open(Z,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-messages"]],standalone:!0,features:[u([]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(c(0,"sz-ui-table-bar",0),$("changed",function(){return e.get();}),d(),c(1,"sz-ui-table",1),$("update",function(){return e.get();}),d()),o&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),s(),n("dataSource",e.dataSource));},dependencies:[q,Q],encapsulation:2});let a=i;return a;})();var Ve=[{path:"",component:x}];export{Ve as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/