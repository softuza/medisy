import{a as d}from"./chunk-N7FFVIDD.js";import{c as ne}from"./chunk-EC77XKO6.js";import{a as u,b as x,d as ee,e as te,g as ie,j as oe,k as re}from"./chunk-RT2DOIX4.js";import"./chunk-FE7PUGPV.js";import"./chunk-WFQLTXIP.js";import"./chunk-OK2QS2H3.js";import{e as Q,f as J,g as K,i as W,j as Y,k as Z}from"./chunk-CR4T7ICE.js";import"./chunk-JLE7ID76.js";import{a as T}from"./chunk-HCDVJ2I2.js";import{h as C}from"./chunk-DINSQL77.js";import{a as $,b as B,d as V,e as P,g as N}from"./chunk-XG5XEC3X.js";import"./chunk-VZOUZHWP.js";import{e as w,y as q,z as H}from"./chunk-NP4UDNU2.js";import"./chunk-KGY6UELD.js";import"./chunk-QO44V4EG.js";import{c as k}from"./chunk-SXV3ZUGK.js";import{j}from"./chunk-DPTX3R7K.js";import{d as M,f as A,g as v,l as z,n as F,q as D,r as b,u as y}from"./chunk-5RALKHWD.js";import"./chunk-CDJ3WT4B.js";import{c as L,e as R}from"./chunk-6KMSPDBU.js";import"./chunk-DC3E3YM6.js";import{ia as G,ja as U,la as X}from"./chunk-EMK4LBFH.js";import"./chunk-PJSKJO6O.js";import{Jb as m,Kb as p,Lb as S,Vb as E,Wb as f,bb as l,cb as a,ea as I,na as c,nc as _,oa as g,oc as h,qb as O,zb as s}from"./chunk-34GBQTTX.js";import"./chunk-43YHV5VG.js";var se=(()=>{let i=class i extends Q{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[M.required]],originator:[r?.originator,[M.required]],body:[r?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(d),a(b),a($),a(B));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),O,h],decls:7,vars:5,consts:()=>{let t;t="Name";let e;e="Originator";let o;return o="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","originator","label",e],["formControlName","body","label",o],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),p()(),S(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(4),s("actions",o.actions));},dependencies:[y,z,A,v,F,D,N,P,j,ne,Y,J,K,H,w,q],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.title=k.sms_notification,this.dataSource=new ee(),this.dataSource.columnDefs.push(u.uuid("id"),u.string("originator").setValueClassFontBold(),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),x.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(se,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(W,{data:Z.delete(this.sntiService.notificationSmses.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(V),a(d),a(L));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-notification-notification-smses"]],features:[_([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),m(2,"button",3),f("click",function(){return o.openSaveComponent();}),m(3,"span"),E(4,0),p()()(),m(5,"sz-ui-table",4),f("update",function(){return o.get();}),p()),e&2&&(s("title",o.title),l(),s("dataSource",o.dataSource),l(4),s("dataSource",o.dataSource));},dependencies:[U,oe,ie,T],encapsulation:2});let n=i;return n;})();var Ke=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=I({providers:[d],imports:[R.forChild([{path:"",component:me}]),N,X,re,T,G]});let n=i;return n;})();export{Ke as NotificationSmssModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/