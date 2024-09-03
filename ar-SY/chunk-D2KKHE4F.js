import{a as M}from"./chunk-UQHA2IJL.js";import{a as T}from"./chunk-RLYTRSWS.js";import{a as ie,b as oe,c as a,f as ne,g as ae,h as re}from"./chunk-F37TLDOJ.js";import{b as W,f as Y,g as Z,h as x,j as ee,k as te}from"./chunk-ZUXIOQ5W.js";import{a as V,b as G,d as $,e as B,g as U}from"./chunk-XPOR4ANW.js";import{c as q,p as w,q as H,r as Q,t as J}from"./chunk-XJQPGDXO.js";import{i as X}from"./chunk-OLKWA3AP.js";import{d as f,f as A,g as z,l as R,n as v,q as F,r as P,t as D}from"./chunk-H2FFMEH6.js";import{b as d,c as K}from"./chunk-Y3WFFMAX.js";import{a as O,b as j}from"./chunk-TCPYXQGZ.js";import{p as y,s as L}from"./chunk-TW5J4YO6.js";import{La as k}from"./chunk-OIZYHDJE.js";import{Jb as m,Kb as p,Lb as S,Vb as b,Wb as I,bb as c,ja as n,mb as h,mc as u,na as _,nc as N,yb as r}from"./chunk-GTR6A7KK.js";import{a as E,b as g}from"./chunk-NLUW4JS2.js";var se=(()=>{let o=class o extends Y{constructor(){let e=n(V);super(e),this.sntiService=n(T),this.fb=n(P),this.data=n(G),this.notificationTypes=Object.keys(M).map(l=>M[l]);let i=this.fb;this.dialog=e;let t=this.data;this.form=i.group({name:[t?.notificationRecipient?.name,[f.maxLength(4096)]],enabled:[t?.notificationRecipient?.enabled??!0,[f.required]],identifier:[t?.notificationRecipient?.identifier,[f.required]],notificationType:[t?.notificationRecipient?.notificationType,[f.required]]});}submit(){this.IsValid()&&(this.data&&this.data.notificationRecipient?this.save(this.sntiService.notifications.recipients.update(this.data.notificationId,this.data.notificationRecipient.id,this.form.value)):this.save(this.sntiService.notifications.recipients.create(this.data.notificationId,this.form.value)));}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-notification-notification-recipients-save"]],standalone:!0,features:[u([]),h,N],decls:9,vars:7,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let i;i="\u0627\u0644\u0646\u0645\u0637";let t;t="\u0627\u0644\u0645\u0639\u0631\u0641";let l;return l="\u0645\u0641\u0639\u0644",[l,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","notificationType","label",i,3,"source","localizedValue"],["formControlName","identifier","label",t],["formControlName","enabled"],[3,"actions"]];},template:function(i,t){i&1&&(S(0,"sz-ui-dialog-header",1),m(1,"mat-dialog-content")(2,"form",2),S(3,"sz-ui-form-field-input",3)(4,"sz-ui-form-field-select",4)(5,"sz-ui-form-field-input",5),m(6,"mat-checkbox",6),b(7,0),p()()(),S(8,"sz-ui-dialog-actions",7)),i&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),c(2),r("formGroup",t.form),c(2),r("source",t.notificationTypes)("localizedValue",!0),c(4),r("actions",t.actions));},dependencies:[D,R,A,z,v,F,U,B,X,H,w,te,Z,x,J,q,Q],encapsulation:2});let s=o;return s;})();var Ue=(()=>{let o=class o{constructor(){this.route=n(y),this.dialog=n($),this.sntiService=n(T),this.notification=this.route.snapshot.data.notification,this.dataSource=new ne(),this.appBarConfig={title:O.recipients,subtitle:this.notification.name,backEnabled:!0,menu:K.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setStacked(a.enum("notificationType").setHeaderName(O.type).setValueGetter(e=>j(e.notificationType)).setValueClassFontSmall()),a.string("identifier"),a.boolean("enabled").setChangeFn((e,i)=>{this.sntiService.notifications.recipients.update(this.notification.id,e.id,g(E({},e),{enabled:i})).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openNotificationRecipientDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openNotificationRecipientDeleteComponent(e){this.dialog.open(ee,{data:W.delete(this.sntiService.notifications.recipients.delete(e.notificationId,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}openSaveComponent(e){this.dialog.open(se,{data:{notificationId:this.notification.id,notificationRecipient:e}}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}get(){this.sntiService.notifications.recipients.get(this.notification.id,this.dataSource.getQuery()).pipe(ae(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-notification-notification-recipients"]],standalone:!0,features:[u([]),N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,t){i&1&&(m(0,"sz-ui-table-bar",0),I("changed",function(){return t.get();}),p(),m(1,"sz-ui-table",1),I("update",function(){return t.get();}),p()),i&2&&(r("config",t.appBarConfig)("dataSource",t.dataSource),c(),r("dataSource",t.dataSource));},dependencies:[L,re,oe,ie,k],encapsulation:2});let s=o;return s;})();export{Ue as a};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/