import{a as m}from"./chunk-UKEI5KKR.js";import{c as re}from"./chunk-MHCBG22D.js";import{a as x,d as ee,e as l,h as te,i as oe,j as ie}from"./chunk-AJ53IAOZ.js";import"./chunk-YSNB3P37.js";import"./chunk-QVKWJFRG.js";import{b as Q,f as k,g as J,h as K,j as W,k as Y}from"./chunk-ZQ3WWH5V.js";import"./chunk-AJFWP4NB.js";import{a as V,b as G,d as R,e as P,g}from"./chunk-IVPZHVY6.js";import{c as j,s as w,t as q}from"./chunk-SXZECFKA.js";import"./chunk-YMAJIOBZ.js";import"./chunk-PYOUUVMA.js";import{i as $}from"./chunk-YLO36JWT.js";import{d as C,f as E,g as A,l as z,n as b,q as v,r as F,t as D}from"./chunk-4DSQMHTF.js";import{b as s,c as H}from"./chunk-UEBI7D6A.js";import{a as Z}from"./chunk-5RP6DSGT.js";import"./chunk-B2AKHGYH.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import{a as X}from"./chunk-TCPYXQGZ.js";import"./chunk-BBLNUGHS.js";import{c as y,d as L}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{ia as B,la as U}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as u,Kb as S,Lb as c,Wb as N,bb as d,ea as O,ja as n,mb as h,mc as _,na as f,nc as M,oa as I,yb as a}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var ae=(()=>{let e=class e extends k{constructor(){let o=n(V);super(o),this.sntiService=n(m),this.fb=n(F),this.data=n(G);let t=this.fb;this.dialog=o;let i=this.data;this.form=t.group({name:[i?.name,[C.required]],originator:[i?.originator,[C.required]],body:[i?.body,[C.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),h,M],decls:7,vars:5,consts:()=>{let o;o="Name";let t;t="Originator";let i;return i="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","originator","label",t],["formControlName","body","label",i],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),S()(),c(6,"sz-ui-dialog-actions",5)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),a("formGroup",i.form),d(4),a("actions",i.actions));},dependencies:[D,z,E,A,b,v,g,P,$,re,Y,J,K,q,j,w],encapsulation:2});let r=e;return r;})();var T=(()=>{let e=class e{constructor(){this.dialog=n(R),this.sntiService=n(m),this.router=n(y),this.dataSource=new te(),this.appBarConfig={title:X.sms_notification,menu:H.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(l.uuid("id"),l.string("originator").setValueClassFontBold(),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),l.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(ae,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(W,{data:Q.delete(this.sntiService.notificationSmses.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-notification-notification-smses"]],standalone:!0,features:[_([]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,i){t&1&&(u(0,"sz-ui-table-bar",0),N("changed",function(){return i.get();}),S(),u(1,"sz-ui-table",1),N("update",function(){return i.get();}),S()),t&2&&(a("config",i.appBarConfig)("dataSource",i.dataSource),d(),a("dataSource",i.dataSource));},dependencies:[x,ee],encapsulation:2});let r=e;return r;})();var je=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=I({type:e}),e.ɵinj=O({providers:[m],imports:[L.forChild([{path:"",component:T}]),g,U,ie,Z,B,T]});let r=e;return r;})();export{je as NotificationSmssModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/