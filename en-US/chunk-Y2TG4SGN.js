import{a as u}from"./chunk-CNHMU26L.js";import{c as W}from"./chunk-B3FOEZVW.js";import{a as Q,b as k,c as m,f as J,g as K}from"./chunk-HRKGCJ5J.js";import"./chunk-K2S4YDTN.js";import"./chunk-Y6HRGFPG.js";import"./chunk-SMSWA6Y3.js";import{b as U,f as X,g as q,h as w,j,k as H}from"./chunk-7LIKFQRF.js";import"./chunk-D6HKAENE.js";import{a as v,b as z,d as D,e as y,g as L}from"./chunk-LY65NDSL.js";import{c as G,s as R,u as $}from"./chunk-ZMSXH5RZ.js";import"./chunk-G2YTV5YP.js";import"./chunk-WX4XW32G.js";import{i as V}from"./chunk-M4AIK4I3.js";import{d as M,f as T,g as O,l as I,n as h,q as E,r as A,t as b}from"./chunk-74QTK57S.js";import{b as s,c as B}from"./chunk-77BL6AJT.js";import"./chunk-N3OI26PY.js";import"./chunk-SHFMPPN3.js";import"./chunk-N4UNFT77.js";import{a as P}from"./chunk-XYHX3JVK.js";import"./chunk-WOGJSFX2.js";import{r as F}from"./chunk-7OTI4YDK.js";import"./chunk-2RLRAFKW.js";import"./chunk-GM25OYN2.js";import"./chunk-27OSCRM5.js";import{Jb as d,Kb as S,Lb as _,Wb as N,bb as l,ja as n,mb as g,mc as c,na as f,nc as C,yb as r}from"./chunk-GVVLUNO3.js";import"./chunk-VARUJZUG.js";var Y=(()=>{let i=class i extends X{constructor(){let o=n(v);super(o),this.sntiService=n(u),this.fb=n(A),this.data=n(z);let e=this.fb;this.dialog=o;let t=this.data;this.form=e.group({name:[t?.name,[M.required]],originator:[t?.originator,[M.required]],body:[t?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[c([u]),g,C],decls:7,vars:5,consts:()=>{let o;o="Name";let e;e="Originator";let t;return t="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","originator","label",e],["formControlName","body","label",t],[3,"actions"]];},template:function(e,t){e&1&&(_(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),S()(),_(6,"sz-ui-dialog-actions",5)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(4),r("actions",t.actions));},dependencies:[b,I,T,O,h,E,L,y,V,W,H,q,w,$,G,R],encapsulation:2});let a=i;return a;})();var Z=(()=>{let i=class i{constructor(){this.dialog=n(D),this.sntiService=n(u),this.router=n(F),this.dataSource=new J(),this.appBarConfig={title:P.sms_notification,menu:B.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(m.uuid("id"),m.string("originator").setValueClassFontBold(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(Y,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(o){this.dialog.open(j,{data:U.delete(this.sntiService.notificationSmses.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-smses"]],standalone:!0,features:[c([]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(d(0,"sz-ui-table-bar",0),N("changed",function(){return t.get();}),S(),d(1,"sz-ui-table",1),N("update",function(){return t.get();}),S()),e&2&&(r("config",t.appBarConfig)("dataSource",t.dataSource),l(),r("dataSource",t.dataSource));},dependencies:[Q,k],encapsulation:2});let a=i;return a;})();var Fe=[{path:"",component:Z}];export{Fe as default};/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/