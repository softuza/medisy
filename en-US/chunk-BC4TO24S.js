import{a as d}from"./chunk-OIMTWOHD.js";import{c as ne}from"./chunk-NCYT4BJ3.js";import{a as u,b as x,d as ee,e as te,g as ie,j as oe,k as re}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import"./chunk-4NTC2VLV.js";import{e as Q,f as J,g as K,i as W,j as Y,k as Z}from"./chunk-76IND4GV.js";import{a as T}from"./chunk-ZPKIPVTE.js";import{h as C}from"./chunk-TIEHGEOE.js";import{a as $,b as B,d as V,e as P,g as N}from"./chunk-QCMAXDKX.js";import{e as w,w as q,x as H}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as k}from"./chunk-AR6ZPEMB.js";import{i as j}from"./chunk-7ZLPMEOZ.js";import{d as M,f as A,g as v,l as z,n as F,q as D,r as b,u as y}from"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as L,e as R}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as G,ja as U,la as X}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as m,Kb as p,Lb as S,Vb as E,Wb as _,bb as l,cb as a,ea as I,na as f,nc as c,oa as g,oc as h,qb as O,zb as s}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var se=(()=>{let i=class i extends Q{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[M.required]],originator:[r?.originator,[M.required]],body:[r?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(d),a(b),a($),a(B));},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[c([]),O,h],decls:7,vars:5,consts:()=>{let t;t="Name";let e;e="Originator";let o;return o="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","originator","label",e],["formControlName","body","label",o],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),p()(),S(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(4),s("actions",o.actions));},dependencies:[y,z,A,v,F,D,N,P,j,ne,Y,J,K,H,w,q],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.title=k.sms_notification,this.dataSource=new ee(),this.dataSource.columnDefs.push(u.uuid("id"),u.string("originator").setValueClassFontBold(),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),x.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(se,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(W,{data:Z.delete(this.sntiService.notificationSmses.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(V),a(d),a(L));},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-smses"]],features:[c([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),_("changed",function(){return o.get();}),m(2,"button",3),_("click",function(){return o.openSaveComponent();}),m(3,"span"),E(4,0),p()()(),m(5,"sz-ui-table",4),_("update",function(){return o.get();}),p()),e&2&&(s("title",o.title),l(),s("dataSource",o.dataSource),l(4),s("dataSource",o.dataSource));},dependencies:[U,oe,ie,T],encapsulation:2});let n=i;return n;})();var Je=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=I({providers:[d],imports:[R.forChild([{path:"",component:me}]),N,X,re,T,G]});let n=i;return n;})();export{Je as NotificationSmssModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/