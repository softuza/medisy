import{a as M}from"./chunk-U25DHMMA.js";import{a as C}from"./chunk-WBEDTO3H.js";import{a as l,b as ae,d as re,f as se,i as le,j as ce}from"./chunk-OD34M2WV.js";import{e as x,f as ee,g as ie,i as te,j as oe,k as ne}from"./chunk-XU4OIEX3.js";import{e as Z,h as O}from"./chunk-VJQIJJGN.js";import{a as G,b as V,d as $,e as B,g as U}from"./chunk-XLS5ADJU.js";import{e as q,j as w,s as J,t as K,v as W,y as Y}from"./chunk-DTFZJJ2Y.js";import{j as X}from"./chunk-4MKCL2OB.js";import{d as S,f as R,g as v,k as F,m as z,p as P,q as b,t as D}from"./chunk-D2M35WMU.js";import{a as y,e as L}from"./chunk-HMSPALCE.js";import{a as H,b as Q}from"./chunk-6GZKHOTA.js";import{ia as j,ka as k}from"./chunk-XX5UC3BF.js";import{Fa as h,Ib as s,Jb as m,Kb as p,Ub as u,Vb as N,ab as _,bb as a,kc as T,lc as I,na as f,ob as A,yb as r}from"./chunk-MR5DLTC3.js";import{a as E,b as g}from"./chunk-XTPTFZB3.js";var de=(()=>{let n=class n extends x{constructor(e,i,t,o){super(t),this.sntiService=e,this.fb=i,this.dialog=t,this.data=o,this.notificationTypes=Object.keys(M).map(d=>M[d]),this.form=i.group({name:[o?.notificationRecipient?.name,[S.maxLength(4096)]],enabled:[o?.notificationRecipient?.enabled??!0,[S.required]],identifier:[o?.notificationRecipient?.identifier,[S.required]],notificationType:[o?.notificationRecipient?.notificationType,[S.required]]});}submit(){this.IsValid()&&(this.data&&this.data.notificationRecipient?this.save(this.sntiService.notifications.recipients.update(this.data.notificationId,this.data.notificationRecipient.id,this.form.value)):this.save(this.sntiService.notifications.recipients.create(this.data.notificationId,this.form.value)));}};n.ɵfac=function(i){return new(i||n)(a(C),a(b),a(G),a(V));},n.ɵcmp=f({type:n,selectors:[["sz-mgmt-notification-notification-recipients-save"]],standalone:!0,features:[T([]),A,I],decls:9,vars:7,consts:()=>{let e;e="Name";let i;i="Type";let t;t="Identifier";let o;return o="Enabled",[o,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","notificationType","label",i,3,"source","localizedValue"],["formControlName","identifier","label",t],["formControlName","enabled"],[3,"actions"]];},template:function(i,t){i&1&&(p(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2),p(3,"sz-ui-form-field-input",3)(4,"sz-ui-form-field-select",4)(5,"sz-ui-form-field-input",5),s(6,"mat-checkbox",6),u(7,0),m()()(),p(8,"sz-ui-dialog-actions",7)),i&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),_(2),r("formGroup",t.form),_(2),r("source",t.notificationTypes)("localizedValue",!0),_(4),r("actions",t.actions));},dependencies:[D,F,R,v,z,P,U,B,X,K,J,oe,ee,ie,Y,q,W],encapsulation:2});let c=n;return c;})();var Ke=(()=>{let n=class n{constructor(e,i,t){this.route=e,this.dialog=i,this.sntiService=t,this.notification=h.required(),this.dataSource=new re(),this.dataSource.columnDefs.push(l.uuid("id"),l.string("name").setStacked(l.enum("notificationType").setName(H.type).setValueGetter(o=>Q(o.notificationType)).setValueClassFontSmall()),l.string("identifier"),l.boolean("enabled").setChangeFn((o,d)=>{this.sntiService.notifications.recipients.update(this.notification().id,o.id,g(E({},o),{enabled:d})).subscribe(_e=>{this.dataSource.addOrUpdateItem(_e);});}),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),ae.menu([O.edit(o=>this.openSaveComponent(o)),Z.divider(),O.delete(o=>this.openNotificationRecipientDeleteComponent(o))]));}ngOnInit(){this.get();}openNotificationRecipientDeleteComponent(e){this.dialog.open(te,{data:ne.delete(this.sntiService.notifications.recipients.delete(e.notificationId,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}openSaveComponent(e){this.dialog.open(de,{data:{notificationId:this.notification().id,notificationRecipient:e}}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}get(){this.sntiService.notifications.recipients.get(this.notification().id,this.dataSource.getQuery()).pipe(w(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};n.ɵfac=function(i){return new(i||n)(a(y),a($),a(C));},n.ɵcmp=f({type:n,selectors:[["sz-mgmt-notification-notification-recipients"]],inputs:{notification:[1,"notification"]},standalone:!0,features:[T([]),I],decls:5,vars:2,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,t){i&1&&(s(0,"sz-ui-table-search-filter",1),N("changed",function(){return t.get();}),s(1,"button",2),N("click",function(){return t.openSaveComponent();}),s(2,"span"),u(3,0),m()()(),s(4,"sz-ui-table",3),N("update",function(){return t.get();}),m()),i&2&&(r("dataSource",t.dataSource),_(4),r("dataSource",t.dataSource));},dependencies:[L,ce,le,se,k,j],encapsulation:2});let c=n;return c;})();export{Ke as a};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/